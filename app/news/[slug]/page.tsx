import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { newsData } from '../data';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// generateStaticParams works with Server Components
export async function generateStaticParams() {
  return newsData.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = newsData.find((item) => item.id === slug);

  if (!post) {
    return {
      title: '記事が見つかりません',
    };
  }

  return {
    title: `${post.title}｜ジェネラルコンサルティンググループ`,
    description: post.content.substring(0, 100).replace(/<[^>]*>?/gm, '') + '...', // Strip HTML tags for description
  };
}

export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = newsData.find((item) => item.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Hero / Title Section */}
      <div className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
             <time className="text-gray-500 font-mono text-sm">{post.date}</time>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed tracking-wide">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          
          {/* Thumbnail if available */}
          {post.thumbnail && (
            <div className="mb-12 rounded-xl overflow-hidden shadow-sm border border-gray-100 relative">
              <Image 
                src={post.thumbnail} 
                alt={post.title} 
                width={800}
                height={500}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          )}

          {/* Article Body */}
          <div 
            className="prose prose-lg prose-red max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-loose prose-li:text-gray-700 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
            
          {/* Back Button */}
          <div className="mt-20 pt-10 border-t border-gray-100 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              &larr; トップページへ戻る
            </Link>
          </div>

        </div>
      </section>
      
      <style>{`
        .prose h3 {
          font-size: 1.5rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          padding: 0.5rem 1rem;
          border-left: 6px solid #cc0000; /* brand-red */
          background-color: #f8f8f8; /* Light gray background */
          line-height: 1.4;
          font-weight: bold;
          color: #1a1a1a;
        }
        .prose h4 {
          font-size: 1.25rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        .prose ul, .prose ol {
          margin-bottom: 2rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose .lead {
          font-weight: bold;
          font-size: 1.1em;
          margin-bottom: 2rem;
        }
        .prose .quote-box {
          background-color: transparent;
          border-left: none;
          padding: 0;
          margin: 1.5rem 0;
          font-style: normal;
        }
        .prose .info-list {
          padding: 1rem 0;
          margin: 2rem 0;
        }
        .prose .info-list dt {
          font-weight: bold;
          color: #cc0000;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .prose .info-list dt:first-child {
          margin-top: 0;
        }
        .prose .info-list dd {
          margin-left: 0;
          margin-bottom: 1.5rem;
          padding-left: 0;
        }
        .prose .cta-box {
          text-center;
          padding: 2rem 0;
          margin: 3rem 0;
        }
        .prose .cta-box h3 {
          margin-top: 0;
          border-left: 6px solid #cc0000;
          padding: 0.5rem 1rem;
          text-align: left;
          color: #1a1a1a;
          background-color: #f8f8f8;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .prose .btn {
          display: inline-block;
          font-weight: bold;
          text-decoration: underline;
          margin-top: 1rem;
          color: #cc0000;
        }
        .prose .btn:hover {
          color: #991b1b; /* red-800 */
        }
        .prose .note {
          font-size: 0.875rem;
          color: #6b7280; /* gray-500 */
          margin-top: 1rem;
        }
        .prose .image-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          margin: 2rem 0;
        }
        .prose .image-grid img {
          width: 100%;
          height: auto;
          margin-bottom: 0 !important;
          border-radius: 8px;
          border: 1px solid #f3f4f6;
        }
        .prose a:not(.btn) {
          color: #cc0000;
          text-decoration: underline;
        }
        .prose a:not(.btn):hover {
          color: #991b1b;
        }
      `}</style>

      <Footer />
    </main>
  );
}

