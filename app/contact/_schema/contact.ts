import { z } from 'zod';

export const contactSchema = z.object({
  companyName: z.string().min(1, { message: '会社名は必須です' }),
  name: z.string().min(1, { message: 'お名前は必須です' }),
  email: z.string().email({ message: 'メールアドレスの形式が正しくありません' }),
  categories: z.array(z.string()).min(1, { message: 'お問い合わせ種別を選択してください' }),
  content: z.string().min(1, { message: 'お問い合わせ内容は必須です' }),
  token: z.string().optional(), // Turnstile token
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const CONTACT_CATEGORIES = [
  'AIマーケ顧問',
  'AI基礎研修',
  'AIマーケ研修',
  'AIツール・プロンプト制作',
  '協業・提携',
  '連載・執筆・取材・講演',
  'その他',
] as const;

