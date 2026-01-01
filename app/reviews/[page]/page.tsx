import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { reviewsData, ITEMS_PER_PAGE } from '../data';
import ReviewList from '../components/ReviewList';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'お客様の声｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループのサービスをご利用いただいたお客様の声（口コミ・評判）を一覧で掲載しています。AI研修やマーケティング支援の効果など、実際の体験談をご覧いただけます。',
};

export async function generateStaticParams() {
  const itemsPerPage = ITEMS_PER_PAGE;
  const totalPages = Math.ceil(reviewsData.length / itemsPerPage);
  
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export default async function ReviewsPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const currentPage = parseInt(page);
  const itemsPerPage = ITEMS_PER_PAGE;
  
  // reviewsData is Newest (Index 0) -> Oldest
  // We want Page 1 = Newest, Page 2 = Older ...
  // No need to reverse.
  
  const totalPages = Math.ceil(reviewsData.length / itemsPerPage);

  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
    notFound();
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReviews = reviewsData.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />

      {/* Hero Section */}
      <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-brand-red font-bold tracking-wider block mb-2">CUSTOMER REVIEWS</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">お客様の声</h1>
          <p className="mt-4 text-gray-600">
            当社のサービスをご利用いただいたお客様の声を一覧で掲載します｡
          </p>
        </div>
      </div>

      {/* Reviews List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <ReviewList reviews={currentReviews} />
          
          {/* Pagination */}
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-4">
            {currentPage > 1 && (
              <Link 
                href={`/reviews/${currentPage - 1}`}
                className="px-4 py-2 border border-brand-red text-brand-red rounded hover:bg-red-50 transition-colors"
              >
                &larr; 前のページ
              </Link>
            )}
            
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                const window = 2;
                const showAll = totalPages <= 12;
                const shouldShow = 
                  showAll || 
                  p === 1 || 
                  p === totalPages || 
                  (p >= currentPage - window && p <= currentPage + window);

                if (shouldShow) {
                  return (
                    <Link
                      key={p}
                      href={`/reviews/${p}`}
                      className={`w-10 h-10 flex items-center justify-center rounded border ${
                        p === currentPage
                          ? 'bg-brand-red text-white border-brand-red'
                          : 'border-gray-300 text-gray-600 hover:border-brand-red hover:text-brand-red'
                      }`}
                    >
                      {p}
                    </Link>
                  );
                } else if (
                  (p === currentPage - window - 1 && p > 1) ||
                  (p === currentPage + window + 1 && p < totalPages)
                ) {
                  return <span key={p} className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>;
                }
                return null;
              })}
            </div>

            {currentPage < totalPages && (
              <Link 
                href={`/reviews/${currentPage + 1}`}
                className="px-4 py-2 border border-brand-red text-brand-red rounded hover:bg-red-50 transition-colors"
              >
                次のページ &rarr;
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

