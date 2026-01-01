"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { contactSchema, ContactFormData } from "@/lib/schema";
import { useContact } from "@/context/ContactContext";
import { StepBar } from "@/components/contact/StepBar";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

// カテゴリーの選択肢
const CATEGORIES = [
  "AIマーケ顧問",
  "AIマーケ研修",
  "AI基礎研修",
  "AIツールの受託開発",
  "協業・提携",
  "連載・執筆・取材・講演",
  "その他",
];

export default function ContactPage() {
  const router = useRouter();
  const { formData, setFormData } = useContact();
  const [turnstileStatus, setTurnstileStatus] = useState<"success" | "error" | "expired" | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: formData, // Contextから初期値を設定
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    setFormData(data); // Contextに保存
    router.push("/contact/confirm");
  };

  return (
    <div className="py-20 px-4 md:px-8 bg-gray-50 min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">お問い合わせ</h1>
        <p className="text-center text-gray-500 mb-12 text-sm">
          ご相談・ご質問など、お気軽にお問い合わせください。
        </p>
        
        <StepBar currentStep="input" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 mt-12">
          
          {/* 会社名 */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="companyName" className="text-sm font-bold text-gray-800 pt-3">
                  会社名<span className="text-brand-red ml-1">*</span>
              </label>
              <div className="w-full">
                <input
                    id="companyName"
                    type="text"
                    placeholder="株式会社〇〇"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                    {...register("companyName")}
                />
                {errors.companyName && (
                    <p className="text-brand-red text-sm mt-1">{errors.companyName.message}</p>
                )}
              </div>
          </div>

          {/* お名前 */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="name" className="text-sm font-bold text-gray-800 pt-3">
                  お名前<span className="text-brand-red ml-1">*</span>
              </label>
              <div className="w-full">
                <input
                    id="name"
                    type="text"
                    placeholder="苗字 名前"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                    {...register("name")}
                />
                {errors.name && (
                    <p className="text-brand-red text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
          </div>

          {/* メールアドレス */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="email" className="text-sm font-bold text-gray-800 pt-3">
                  メールアドレス<span className="text-brand-red ml-1">*</span>
              </label>
              <div className="w-full">
                <input
                    id="email"
                    type="email"
                    placeholder="sample@example.com"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-brand-red text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
          </div>

          {/* お問い合わせ種別 */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <div className="pt-3">
                <label className="text-sm font-bold text-gray-800 block">
                    お問い合わせ種別<span className="text-brand-red ml-1">*</span>
                </label>
              </div>
              <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      {CATEGORIES.map((cat) => (
                          <div key={cat} className="flex items-center p-1">
                              <input
                                  type="checkbox"
                                  id={`cat-${cat}`}
                                  value={cat}
                                  className="w-5 h-5 text-brand-red border-gray-300 rounded focus:ring-brand-red focus:ring-offset-0"
                                  {...register("categories")}
                              />
                              <label htmlFor={`cat-${cat}`} className="ml-3 text-sm text-gray-700 cursor-pointer hover:text-gray-900 flex-1">
                                  {cat}
                              </label>
                          </div>
                      ))}
                  </div>
                  {errors.categories && (
                      <p className="text-brand-red text-sm mt-1">{errors.categories.message}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">※連載・執筆、協業、講演のご相談も承っています</p>
              </div>
          </div>

          {/* お問い合わせ内容 */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="message" className="text-sm font-bold text-gray-800 pt-3">
                  お問い合わせ内容<span className="text-brand-red ml-1">*</span>
              </label>
              <div className="w-full">
                <textarea
                    id="message"
                    rows={8}
                    placeholder="例：AIマーケ研修の導入を検討しています。現在、マーケティング専任者がおらず兼務体制のため、AIを活用して集客の仕組みを効率的に内製化できる研修を探しています。具体的なカリキュラム内容、実務レベルでどこまで対応できるようになるか、また所要時間や費用感について詳しく知りたいです。"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all resize-y placeholder-gray-400"
                    {...register("message")}
                ></textarea>
                {errors.message && (
                    <p className="text-brand-red text-sm mt-1">{errors.message.message}</p>
                )}
                <p className="text-xs text-gray-500 mt-2">※営業メールはお控えください</p>
              </div>
          </div>

          {/* Turnstile (Spam Protection) */}
          <div className="flex justify-center py-4">
              <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} // Default: Test Site Key
                  onSuccess={(token) => {
                      setValue("turnstileToken", token);
                      setTurnstileStatus("success");
                  }}
                  onError={() => setTurnstileStatus("error")}
                  onExpire={() => setTurnstileStatus("expired")}
              />
          </div>

          {/* 送信ボタン（確認画面へ） */}
          <div className="flex justify-center mt-12">
              <button
                  type="submit"
                  className="w-full md:w-auto px-16 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                  入力内容を確認する
              </button>
          </div>

        </form>
      </div>
    </div>
  );
}
