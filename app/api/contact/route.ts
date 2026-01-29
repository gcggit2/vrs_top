import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema, kabeuchiSchema } from '@/lib/schema';

// 環境変数がなくてもビルドエラーにならないようにダミー値をデフォルトとして設定
const resendApiKey = process.env.RESEND_API_KEY || 're_dummy_123456789';
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const type = body.type || 'contact'; // 'contact' or 'kabeuchi'

    // Cloudflare Turnstile 検証（共通）
    const token = type === 'kabeuchi' ? body.data?.turnstileToken : body.turnstileToken;
    if (process.env.TURNSTILE_SECRET_KEY && token) {
        const formData = new FormData();
        formData.append('secret', process.env.TURNSTILE_SECRET_KEY);
        formData.append('response', token);

        const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: formData,
        });

        const turnstileData = await turnstileRes.json();
        if (!turnstileData.success) {
            return NextResponse.json({ error: '不正なアクセスです (Turnstile verification failed)' }, { status: 400 });
        }
    }

    if (type === 'kabeuchi') {
      // ------------------------------------------------
      // 壁打ち申込フォーム
      // ------------------------------------------------
      const result = kabeuchiSchema.safeParse(body.data);
      if (!result.success) {
        return NextResponse.json({ error: result.error.errors }, { status: 400 });
      }

      const { name, companyName, position, email, url, topics, otherTopic, marketingBudget, businessIssues, requests } = result.data;

      // 1. 管理者への通知メール
      console.log(`[Dev Log] Sending Admin Email:
        To: info@general-cg.com
        Subject: 【壁打ち申込】${companyName} ${name}様より
        Body Preview: ${topics.join(', ')}...
      `);
      await resend.emails.send({
        from: 'ジェネラルコンサルティンググループ株式会社 <info@general-cg.com>',
        to: ['info@general-cg.com'],
        subject: `【壁打ち申込】${companyName} ${name}様より`,
        text: `
利益の『伸びしろ』壁打ちの申し込みがありました。

--------------------------------------------------
お名前：${name}
会社名：${companyName}
役職：${position}
メールアドレス：${email}
Webサイト：${url}

【特に話したい内容】
${topics.join('\n')}
${otherTopic ? `その他：${otherTopic}` : ''}

【主な集客施策と月間の広告費】
${marketingBudget || '（未入力）'}

【外注業務 or 社内で時間がかかっている業務】
${businessIssues || '（未入力）'}

【その他（依頼背景・槙へ特に聞きたいこと）】
${requests || '（未入力）'}
--------------------------------------------------
        `,
      });

      // 2. ユーザーへの自動返信メール
      console.log(`[Dev Log] Sending Auto-Reply Email:
        To: ${email}
        Subject: 【自動送信】利益の『伸びしろ』壁打ちのお申し込みを受け付けました
      `);
      await resend.emails.send({
        from: 'ジェネラルコンサルティンググループ株式会社 <info@general-cg.com>',
        to: [email],
        subject: '【自動送信】利益の『伸びしろ』壁打ちのお申し込みを受け付けました',
        text: `
${companyName}
${name} 様

この度は、「利益の『伸びしろ』壁打ち」にお申し込みいただきありがとうございます。
以下の内容で受け付けました。

通常2営業日以内に､日程調整のご連絡を差し上げます。
当日までに貴社のWebサイトやご記入いただいた情報を確認し、「どこに利益の伸びしろがあるか」の仮説を立てた状態で壁打ちに臨めればと思います｡

--------------------------------------------------
お名前：${name}
会社名：${companyName}
役職：${position}
メールアドレス：${email}
Webサイト：${url}

【特に話したい内容】
${topics.join('\n')}
${otherTopic ? `その他：${otherTopic}` : ''}

【主な集客施策と月間の広告費】
${marketingBudget || '（未入力）'}

【外注業務 or 社内で時間がかかっている業務】
${businessIssues || '（未入力）'}

【その他（依頼背景・槙へ特に聞きたいこと）】
${requests || '（未入力）'}
--------------------------------------------------
        `,
      });

    } else {
      // ------------------------------------------------
      // 通常お問い合わせフォーム
      // ------------------------------------------------
      const result = contactSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json({ error: result.error.errors }, { status: 400 });
      }

      const { companyName, name, email, categories, message } = result.data;

      // 1. 管理者への通知メール
      console.log(`[Dev Log] Sending Admin Email (Contact):
        To: info@general-cg.com
        Subject: 【お問い合わせ】${companyName} ${name}様より
      `);
      await resend.emails.send({
        from: 'ジェネラルコンサルティンググループ株式会社 <info@general-cg.com>',
        to: ['info@general-cg.com'],
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
      console.log(`[Dev Log] Sending Auto-Reply Email (Contact):
        To: ${email}
        Subject: 【自動送信】お問い合わせを受け付けました
      `);
      await resend.emails.send({
        from: 'ジェネラルコンサルティンググループ株式会社 <info@general-cg.com>',
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
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
