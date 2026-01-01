"use client";

import { useRouter } from "next/navigation";
import { useContact } from "@/context/ContactContext";
import { StepBar } from "@/components/contact/StepBar";
import { useState, useEffect } from "react";

export default function ConfirmPage() {
  const router = useRouter();
  const { formData } = useContact();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // マウント時にデータチェックを行う（クライアントサイドのみ）
  useEffect(() => {
    if (!formData.name || !formData.email) {
      router.push("/contact");
    }
  }, [formData, router]);

  if (!formData.name) {
    return null; // リダイレクトまでの間、何も表示しない
  }

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("送信に失敗しました");
      }

      router.push("/contact/thanks");
    } catch (error) {
      alert("送信中にエラーが発生しました。");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 px-4 md:px-8 bg-gray-50 min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">確認画面</h1>
        <p className="text-center text-gray-500 mb-12 text-sm">
          以下の内容で送信します。よろしければ「送信する」ボタンを押してください。
        </p>
      
        <StepBar currentStep="confirm" />

        <div className="mt-12 space-y-8 bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-200">
          {/* 確認項目 */}
          <div className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-4 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
              <p className="text-sm font-bold text-gray-500">会社名</p>
              <p className="text-base font-medium text-gray-900">{formData.companyName}</p>
          </div>

          <div className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-4 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
              <p className="text-sm font-bold text-gray-500">お名前</p>
              <p className="text-base font-medium text-gray-900">{formData.name}</p>
          </div>

          <div className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-4 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
              <p className="text-sm font-bold text-gray-500">メールアドレス</p>
              <p className="text-base font-medium text-gray-900">{formData.email}</p>
          </div>

          <div className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-4 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
              <p className="text-sm font-bold text-gray-500">お問い合わせ種別</p>
              <div className="flex flex-wrap gap-2">
                {formData.categories.map((cat) => (
                    <span key={cat} className="inline-block bg-white border border-gray-300 px-3 py-1 rounded text-sm font-medium">
                        {cat}
                    </span>
                ))}
              </div>
          </div>

          <div className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-4">
              <p className="text-sm font-bold text-gray-500">お問い合わせ内容</p>
              <p className="text-base whitespace-pre-wrap leading-relaxed text-gray-900">{formData.message}</p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 mt-12">
          <button
              onClick={handleBack}
              className="w-full md:w-auto px-12 py-4 bg-white text-gray-600 font-bold rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors border border-gray-300"
              disabled={isSubmitting}
          >
              戻って修正する
          </button>
          <button
              onClick={handleSubmit}
              className="w-full md:w-auto px-16 py-4 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
              disabled={isSubmitting}
          >
              {isSubmitting ? "送信中..." : "上記の内容で送信する"}
          </button>
        </div>
      </div>
    </div>
  );
}
