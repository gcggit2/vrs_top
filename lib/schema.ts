import { z } from "zod";

// 既存のお問い合わせフォーム用スキーマ
export const contactSchema = z.object({
  companyName: z.string().min(1, { message: "会社名を入力してください" }),
  name: z.string().min(1, { message: "お名前を入力してください" }),
  email: z
    .string()
    .min(1, { message: "メールアドレスを入力してください" })
    .email({ message: "メールアドレスの形式が正しくありません" }),
  categories: z.array(z.string()).min(1, { message: "お問い合わせ種別を1つ以上選択してください" }),
  message: z.string().min(1, { message: "お問い合わせ内容を入力してください" }),
  turnstileToken: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// 壁打ち申込フォーム用スキーマ
export const kabeuchiSchema = z.object({
  name: z.string().min(1, { message: "お名前を入力してください" }),
  companyName: z.string().min(1, { message: "会社名を入力してください" }),
  position: z.string().min(1, { message: "役職を入力してください" }),
  email: z
    .string()
    .min(1, { message: "メールアドレスを入力してください" })
    .email({ message: "メールアドレスの形式が正しくありません" }),
  url: z
    .string()
    .min(1, { message: "WebサイトのURLを入力してください" })
    .url({ message: "正しいURL形式で入力してください" }),
  topics: z.array(z.string()).min(1, { message: "特に話したい内容を1つ以上選択してください" }),
  otherTopic: z.string().optional(), // その他（自由記述）
  marketingBudget: z.string().optional(), // 主な集客施策と月間の広告費
  businessIssues: z.string().optional(), // 外注業務 or 社内で時間がかかっている業務
  requests: z.string().optional(), // その他（依頼背景・槙へ特に聞きたいこと）
  turnstileToken: z.string().optional(),
});

export type KabeuchiFormData = z.infer<typeof kabeuchiSchema>;
