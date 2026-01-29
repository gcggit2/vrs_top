"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { kabeuchiSchema, KabeuchiFormData } from "@/lib/schema";
import { useContact } from "@/context/ContactContext";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

// 選択肢
const TOPICS = [
  "【守り】手作業：高い給与の大半が、売上に直結する業務ではなく雑務に消えている",
  "【守り】外注費：実はAIで数秒で終わる業務に、高い外注費を払い続けている",
  "【攻め】集客・Web広告：代理店任せ/独学でも、ムダなく機会損失なく運用できているか確信が持てない",
  "【攻め】Webサイト・LP：「売れるために必須の要素」が網羅されているか､致命的なミスがないか確信が持てない",
];

export default function KabeuchiApplyPage() {
  const router = useRouter();
  const { kabeuchiData, setKabeuchiData } = useContact();
  const [turnstileStatus, setTurnstileStatus] = useState<"success" | "error" | "expired" | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<KabeuchiFormData>({
    resolver: zodResolver(kabeuchiSchema),
    defaultValues: kabeuchiData, // Contextから初期値を設定
  });

  const onSubmit: SubmitHandler<KabeuchiFormData> = (data) => {
    setKabeuchiData(data); // Contextに保存
    router.push("/kabeuchi/apply/confirm");
  };

  return (
    <div className="py-20 px-4 md:px-8 bg-gray-50 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">利益の『伸びしろ』壁打ち お申し込み</h1>
        <p className="text-center text-gray-500 mb-12 text-sm">
          <span className="text-[oklch(0.623_0.19_145.35)]">※秘密保持を遵守いたします。ご記入いただいた情報が外部に出ることはありません</span>
        </p>
        
        {/* StepBar的なものを入れるならここ */}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 mt-12">
          
          {/* お名前 */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="name" className="text-sm font-bold text-gray-800 pt-3">
                  お名前<span className="text-brand-red ml-1 text-red-600">*</span>
              </label>
              <div className="w-full">
                <input
                    id="name"
                    type="text"
                    placeholder="苗字 名前"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.623_0.19_145.35)]/20 focus:border-[oklch(0.623_0.19_145.35)] transition-all text-gray-900"
                    {...register("name")}
                />
                {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
          </div>

          {/* 会社名 */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="companyName" className="text-sm font-bold text-gray-800 pt-3">
                  会社名<span className="text-brand-red ml-1 text-red-600">*</span>
              </label>
              <div className="w-full">
                <input
                    id="companyName"
                    type="text"
                    placeholder="株式会社〇〇"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.623_0.19_145.35)]/20 focus:border-[oklch(0.623_0.19_145.35)] transition-all text-gray-900"
                    {...register("companyName")}
                />
                {errors.companyName && (
                    <p className="text-red-600 text-sm mt-1">{errors.companyName.message}</p>
                )}
              </div>
          </div>

          {/* 役職 */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="position" className="text-sm font-bold text-gray-800 pt-3">
                  役職<span className="text-brand-red ml-1 text-red-600">*</span>
              </label>
              <div className="w-full">
                <input
                    id="position"
                    type="text"
                    placeholder="代表取締役"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.623_0.19_145.35)]/20 focus:border-[oklch(0.623_0.19_145.35)] transition-all text-gray-900"
                    {...register("position")}
                />
                {errors.position && (
                    <p className="text-red-600 text-sm mt-1">{errors.position.message}</p>
                )}
              </div>
          </div>

          {/* メールアドレス */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="email" className="text-sm font-bold text-gray-800 pt-3">
                  メールアドレス<span className="text-brand-red ml-1 text-red-600">*</span>
              </label>
              <div className="w-full">
                <input
                    id="email"
                    type="email"
                    placeholder="sample@example.com"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.623_0.19_145.35)]/20 focus:border-[oklch(0.623_0.19_145.35)] transition-all text-gray-900"
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
          </div>

          {/* WebサイトのURL */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="url" className="text-sm font-bold text-gray-800 pt-3">
                  WebサイトのURL<span className="text-brand-red ml-1 text-red-600">*</span>
              </label>
              <div className="w-full">
                <input
                    id="url"
                    type="url"
                    placeholder="https://www.general-cg.com/"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.623_0.19_145.35)]/20 focus:border-[oklch(0.623_0.19_145.35)] transition-all text-gray-900"
                    {...register("url")}
                />
                <p className="text-xs text-gray-500 mt-1"></p>
                {errors.url && (
                    <p className="text-red-600 text-sm mt-1">{errors.url.message}</p>
                )}
              </div>
          </div>

          {/* 特に話したい内容 */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <div className="pt-3">
                <label className="text-sm font-bold text-gray-800 block">
                    特に話したい内容<br/><span className="text-xs font-normal">（複数選択可）</span><span className="text-brand-red ml-1 text-red-600">*</span>
                </label>
              </div>
              <div className="w-full">
                  <div className="grid grid-cols-1 gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      {TOPICS.map((topic, index) => (
                          <div key={index} className="flex items-start p-1">
                              <input
                                  type="checkbox"
                                  id={`topic-${index}`}
                                  value={topic}
                                  className="mt-1 w-5 h-5 text-[oklch(0.623_0.19_145.35)] border-gray-300 rounded focus:ring-[oklch(0.623_0.19_145.35)] focus:ring-offset-0"
                                  {...register("topics")}
                              />
                              <label htmlFor={`topic-${index}`} className="ml-3 text-sm text-gray-700 cursor-pointer hover:text-gray-900 flex-1 leading-relaxed">
                                  {topic}
                              </label>
                          </div>
                      ))}
                      <div className="flex items-center p-1 mt-2 border-t border-gray-200 pt-3">
                          <label htmlFor="otherTopic" className="text-sm font-bold text-gray-700 w-20 shrink-0">その他：</label>
                          <input
                              type="text"
                              id="otherTopic"
                              placeholder="お話したいことがある方は､ご自由に記入してください"
                              className="flex-1 p-2 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:border-[oklch(0.623_0.19_145.35)] text-gray-900"
                              {...register("otherTopic")}
                          />
                      </div>
                  </div>
                  {errors.topics && (
                      <p className="text-red-600 text-sm mt-1">{errors.topics.message}</p>
                  )}
              </div>
          </div>

          <p className="text-sm md:text-base text-[oklch(0.623_0.19_145.35)] font-bold bg-[oklch(0.623_0.19_145.35)]/5 p-4 rounded-lg border border-[oklch(0.623_0.19_145.35)]/20 text-center md:text-left leading-relaxed">
            <span className="block mb-1">▼ 以下もご記入いただけると、当日の壁打ちがより充実します ▼</span>
            <span className="text-xs md:text-sm font-normal text-gray-600 block">（差し支えない範囲でご協力ください）</span>
          </p>

          {/* 主な集客施策と月間の広告費 */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="marketingBudget" className="text-sm font-bold text-gray-800 pt-3">
                  主な集客施策と<br/>月間の広告費（概算）
              </label>
              <div className="w-full">
                <textarea
                    id="marketingBudget"
                    rows={3}
                    placeholder="例：FB広告 月80万、リスティング 月20万。CPAは3,000円前後ですが、ここ数ヶ月は悪化傾向にあります。"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.623_0.19_145.35)]/20 focus:border-[oklch(0.623_0.19_145.35)] transition-all resize-y placeholder-gray-400 text-gray-900"
                    {...register("marketingBudget")}
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">具体的な媒体名と予算、そして「悩み」のニュアンスまで書いていただけると、より具体的なアドバイスが可能です。</p>
              </div>
          </div>

          {/* 外注業務 or 社内で時間がかかっている業務 */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="businessIssues" className="text-sm font-bold text-gray-800 pt-3">
                  外注業務 or<br/>社内で時間がかかっている業務
              </label>
              <div className="w-full">
                <textarea
                    id="businessIssues"
                    rows={3}
                    placeholder={`例：広告運用を代理店に丸投げしている\n例：毎月のレポート作成や顧客への定型返信に月30時間ほど費やしている`}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.623_0.19_145.35)]/20 focus:border-[oklch(0.623_0.19_145.35)] transition-all resize-y placeholder-gray-400 text-gray-900"
                    {...register("businessIssues")}
                ></textarea>
                <p className="text-xs text-gray-500 mt-1"></p>
              </div>
          </div>

          {/* その他（依頼背景・槙へ特に聞きたいこと） */}
          <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
              <label htmlFor="requests" className="text-sm font-bold text-gray-800 pt-3">
                  その他<br/><span className="text-xs font-normal">（依頼背景・槙へ特に聞きたいこと）</span>
              </label>
              <div className="w-full">
                <textarea
                    id="requests"
                    rows={4}
                    placeholder={`例：売上は上がっているが利益が残らない根本的な理由を知りたい\n例：広告運用のブラックボックス化を解消したい`}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.623_0.19_145.35)]/20 focus:border-[oklch(0.623_0.19_145.35)] transition-all resize-y placeholder-gray-400 text-gray-900"
                    {...register("requests")}
                ></textarea>
                <p className="text-xs text-gray-500 mt-1"></p>
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
