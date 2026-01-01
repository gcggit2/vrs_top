"use client";

import Link from "next/link";
import { StepBar } from "@/components/contact/StepBar";
import { useContact } from "@/context/ContactContext";
import { useEffect } from "react";

export default function ThanksPage() {
  const { clearFormData } = useContact();

  useEffect(() => {
    // 完了画面に到達したらフォームデータをクリアする
    clearFormData();
  }, [clearFormData]);

  return (
    <div className="py-20 px-4 md:px-8 bg-gray-50 min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-20 rounded-xl shadow-sm border border-gray-100 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">送信完了</h1>
        <p className="text-gray-500 mb-12 text-sm">
            お問い合わせありがとうございました。
        </p>
        
        <StepBar currentStep="complete" />

        <div className="py-12">
            <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-4">
                お問い合わせを受け付けました
            </h2>
            
            <p className="text-gray-600 mb-12 text-base leading-relaxed max-w-lg mx-auto">
                自動返信メールをお送りいたしましたのでご確認ください。<br />
                担当者より、通常3営業日以内にご連絡させていただきます。
            </p>

            <p className="text-xs text-gray-400 mb-12 max-w-md mx-auto">
                ※万が一メールが届かない場合は、迷惑メールフォルダをご確認いただくか、再度お問い合わせください。
            </p>

            <Link 
                href="/" 
                className="inline-block px-12 py-4 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-500 transition-all shadow-md hover:shadow-lg"
            >
                トップページへ戻る
            </Link>
        </div>
      </div>
    </div>
  );
}
