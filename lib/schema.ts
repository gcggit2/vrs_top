import { z } from "zod";

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
