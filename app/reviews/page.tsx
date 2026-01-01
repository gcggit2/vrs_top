import { redirect } from 'next/navigation';

export default function ReviewsIndex() {
  // Redirect to page 1 (Newest content)
  redirect('/reviews/1');
}
