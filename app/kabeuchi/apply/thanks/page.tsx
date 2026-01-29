"use client";

import Link from "next/link";
import { useContact } from "@/context/ContactContext";
import { useEffect } from "react";

export default function KabeuchiThanksPage() {
  const { clearKabeuchiData } = useContact();

  useEffect(() => {
    // 完了画面に到達したらフォームデータをクリアする
    clearKabeuchiData();
  }, [clearKabeuchiData]);

  return (
    <div className="py-20 px-4 md:px-8 bg-gray-50 min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white p-8 md:p-16 rounded-xl shadow-sm border border-gray-100 text-center">
        <div className="w-20 h-20 bg-[oklch(0.623_0.19_145.35)]/10 text-[oklch(0.623_0.19_145.35)] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">お申し込みを受け付けました</h1>
        
        <div className="text-gray-600 leading-relaxed mb-10 text-left md:text-center max-w-2xl mx-auto space-y-4">
          <p>
            壁打ちのお申し込み､ありがとうございます。
          </p>
          <p>
            通常2営業日以内に､日程調整のご連絡を差し上げます。
          </p>
          <p>
            当日までに貴社のWebサイトやご記入いただいた情報を確認し、「どこに利益の伸びしろがあるか」の仮説を立てた状態で壁打ちに臨めればと思います｡
          </p>
          <p>
            お話できることを、楽しみにしております。
          </p>
        </div>

        <p className="text-gray-600 mb-12 text-base leading-relaxed max-w-lg mx-auto">
            自動返信メールをお送りいたしましたのでご確認ください。
        </p>

        <p className="text-xs text-gray-400 mb-12 max-w-md mx-auto">
            ※万が一メールが届かない場合は、迷惑メールフォルダをご確認いただくか、再度お問い合わせください。
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-12 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          トップページへ戻る
        </Link>
      </div>
    </div>
  );
}
