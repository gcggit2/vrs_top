import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { projects, ITEMS_PER_PAGE } from '../data';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: '支援事例一覧｜ジェネラルコンサルティンググループ',
  description: 'ジェネラルコンサルティンググループの支援事例一覧です。AI×マーケティングによる売上アップ、業務効率化の成功事例をご紹介します。',
};

export async function generateStaticParams() {
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'AI×マーケ':
      return 'bg-brand-red text-white border-brand-red';
    case 'AI':
      return 'bg-[#00509d] text-white border-[#00509d]';
    case 'マーケティング':
      return 'bg-amber-600 text-white border-amber-600';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default async function ProjectsPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const currentPage = parseInt(page);
  
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
    notFound();
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      
      {/* Page Title */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-red font-bold tracking-widest block mb-4">PROJECTS</span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">支援事例一覧</h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentProjects.map((project, index) => (
              <Link key={index} href={project.url} className="group cursor-pointer block h-full">
                <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image 
                      src={project.image} 
                      alt={project.client} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Category Label Overlay */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryStyle(project.category)}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors mb-4">
                        {project.client}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="mt-6 flex items-center text-brand-red font-bold text-sm">
                        <span>詳しく見る</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-4">
            {currentPage > 1 && (
              <Link 
                href={`/projects/${currentPage - 1}`}
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
                      href={`/projects/${p}`}
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
                href={`/projects/${currentPage + 1}`}
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

