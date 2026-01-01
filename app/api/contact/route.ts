import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // サーバーサイドバリデーション
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error.errors }, { status: 400 });
    }

    const { companyName, name, email, categories, message, turnstileToken } = result.data;

    // Cloudflare Turnstile 検証
    if (process.env.TURNSTILE_SECRET_KEY && turnstileToken) {
        const formData = new FormData();
        formData.append('secret', process.env.TURNSTILE_SECRET_KEY);
        formData.append('response', turnstileToken);

        const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: formData,
        });

        const turnstileData = await turnstileRes.json();
        if (!turnstileData.success) {
            return NextResponse.json({ error: '不正なアクセスです (Turnstile verification failed)' }, { status: 400 });
        }
    }

    // 1. 管理者への通知メール
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // 本番運用時はドメイン認証後に変更
      to: ['yuma.maki@general-cg.com'],
      subject: `【お問い合わせ】${companyName} ${name}様より`,
      text: `
以下の内容でお問い合わせがありました。

--------------------------------------------------
会社名：${companyName}
お名前：${name}
メールアドレス：${email}
お問い合わせ種別：${categories.join(', ')}

お問い合わせ内容：
${message}
--------------------------------------------------
      `,
    });

    // 2. ユーザーへの自動返信メール
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [email],
      subject: '【自動送信】お問い合わせを受け付けました',
      text: `
${companyName}
${name} 様

この度はお問い合わせいただきありがとうございます。
以下の内容で受け付けました。
担当者より折り返しご連絡させていただきます。

--------------------------------------------------
会社名：${companyName}
お名前：${name}
メールアドレス：${email}
お問い合わせ種別：${categories.join(', ')}

お問い合わせ内容：
${message}
--------------------------------------------------
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
