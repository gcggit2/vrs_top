"use client";

import { useRouter } from "next/navigation";
import { useContact } from "@/context/ContactContext";
import { StepBar } from "@/components/contact/StepBar";
import { useState } from "react";
import Link from "next/link";

export default function KabeuchiConfirmPage() {
  const router = useRouter();
  const { kabeuchiData, clearKabeuchiData } = useContact();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // データがない場合は入力画面にリダイレクト（簡易的）
  if (!kabeuchiData.email) {
    if (typeof window !== "undefined") {
      router.push("/kabeuchi/apply");
    }
    return null;
  }

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "kabeuchi", // 識別用
          data: kabeuchiData,
        }),
      });

      if (!res.ok) {
        throw new Error("送信に失敗しました");
      }

      // clearKabeuchiData(); // 完了画面でクリアするのでここでは削除
      router.push("/kabeuchi/apply/thanks");
    } catch (err) {
      setError("送信中にエラーが発生しました。時間をおいて再度お試しください。");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 px-4 md:px-8 bg-gray-50 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">入力内容の確認</h1>
        <p className="text-center text-gray-500 mb-12 text-sm">
          以下の内容で送信します。よろしければ「送信する」ボタンを押してください。
        </p>
        
        {/* StepBarは共通コンポーネントまたは別途作成が必要 */}
        {/* 今回は既存のStepBarがcontact用かもしれないので、一旦簡易表示か、あるいは既存を流用 */}
        {/* <StepBar currentStep="confirm" /> */}
        
        <div className="space-y-8 mt-8 border-t border-gray-100 pt-8">
          
          <div className="grid md:grid-cols-[200px_1fr] gap-4 border-b border-gray-100 pb-4">
            <div className="text-sm font-bold text-gray-500">お名前</div>
            <div className="text-gray-900 font-medium">{kabeuchiData.name}</div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-4 border-b border-gray-100 pb-4">
            <div className="text-sm font-bold text-gray-500">会社名</div>
            <div className="text-gray-900 font-medium">{kabeuchiData.companyName}</div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-4 border-b border-gray-100 pb-4">
            <div className="text-sm font-bold text-gray-500">役職</div>
            <div className="text-gray-900 font-medium">{kabeuchiData.position}</div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-4 border-b border-gray-100 pb-4">
            <div className="text-sm font-bold text-gray-500">メールアドレス</div>
            <div className="text-gray-900 font-medium">{kabeuchiData.email}</div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-4 border-b border-gray-100 pb-4">
            <div className="text-sm font-bold text-gray-500">WebサイトのURL</div>
            <div className="text-gray-900 font-medium break-all">{kabeuchiData.url}</div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-4 border-b border-gray-100 pb-4">
            <div className="text-sm font-bold text-gray-500">特に話したい内容</div>
            <div className="text-gray-900 font-medium">
              <ul className="list-disc list-inside space-y-1">
                {kabeuchiData.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
              {kabeuchiData.otherTopic && (
                <div className="mt-2 text-sm text-gray-600 pl-4 border-l-2 border-gray-200">
                  その他：{kabeuchiData.otherTopic}
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-4 border-b border-gray-100 pb-4">
            <div className="text-sm font-bold text-gray-500">主な集客施策と広告費</div>
            <div className="text-gray-900 font-medium whitespace-pre-wrap">
              {kabeuchiData.marketingBudget || "（未入力）"}
            </div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-4 border-b border-gray-100 pb-4">
            <div className="text-sm font-bold text-gray-500">外注・時間コスト</div>
            <div className="text-gray-900 font-medium whitespace-pre-wrap">
              {kabeuchiData.businessIssues || "（未入力）"}
            </div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-4 border-b border-gray-100 pb-4">
            <div className="text-sm font-bold text-gray-500">その他（依頼背景等）</div>
            <div className="text-gray-900 font-medium whitespace-pre-wrap">
              {kabeuchiData.requests || "（未入力）"}
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-50 text-red-600 text-center rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-12">
          <button
            onClick={() => router.back()}
            disabled={isSubmitting}
            className="w-full md:w-auto px-12 py-4 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200 transition-all disabled:opacity-50"
          >
            戻って修正する
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full md:w-auto px-16 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                送信中...
              </>
            ) : (
              "この内容で送信する"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
