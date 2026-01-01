'use client';

import { ReviewItem } from '../data';

interface ReviewListProps {
  reviews: ReviewItem[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="space-y-16">
      {reviews.map((review) => (
        <div key={review.id} className="review-item bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
          {/* Image Placeholder */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
            <img 
              src={review.image} 
              alt={`お客様の声 ${review.id}`} 
              className="w-full h-auto"
              onError={(e) => {
                  // Fallback if image not found
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmM2Y0ZjYiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIj5JbWFnZSBIZXJlPC90ZXh0Pjwvc3ZnPg==';
              }}
            />
          </div>

          {/* Q&A List */}
          <div className="space-y-8">
            {review.qa.map((qa, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-brand-red mb-3 text-lg border-l-4 border-brand-red pl-3 py-1 bg-red-50">
                  {qa.question}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {qa.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

