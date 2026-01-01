import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../projects/data';

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

export default function Projects() {
  // トップページに固定表示する8つの事例
  const FEATURED_PROJECT_URLS = [
    '/projects/eikokuya',
    '/projects/ad-house',
    '/projects/sks',
    '/projects/law-firm',
    '/projects/tourism-infrastructure',
    '/projects/bpo-customer-support',
    '/projects/coconala',
    '/projects/promotional-support'
  ];

  const featuredProjects = FEATURED_PROJECT_URLS.map(url => 
    projects.find(p => p.url === url)
  ).filter((p): p is typeof projects[0] => p !== undefined);

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold block mb-2 tracking-wider">PROJECTS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">支援事例</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6"></div>
          <p className="mt-8 text-gray-600 max-w-4xl mx-auto">
            社員数名〜約150名の中小企業を中心に､大手上場企業・法律事務所・医療機関など多数支援してきました｡
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-16">
          {featuredProjects.map((project, index) => (
            <Link key={index} href={project.url} className="group cursor-pointer block">
              <div className="relative bg-gray-50 rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 aspect-[4/3] mb-5">
                {/* Image */}
                <Image 
                  src={project.image} 
                  alt={project.client} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                {/* Category Label Overlay */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryStyle(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Caption */}
              <div className="text-center">
                <p className="text-base font-bold text-gray-900 group-hover:text-brand-red transition-colors mb-1">
                  {project.client}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 bg-brand-red text-white font-bold py-4 px-12 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            すべての支援事例を見る
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
