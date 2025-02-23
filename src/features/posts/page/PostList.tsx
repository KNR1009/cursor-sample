/**
 * @file 投稿一覧のプレゼンテーショナルコンポーネント
 * @description 投稿一覧ページのメインコンテンツを表示するコンポーネント
 */
import { Post } from '@/types/post';
import { PostCard } from '../components/PostCard';
import Link from 'next/link';

type PostListProps = {
  posts: Post[];
};

export function PostList({ posts }: PostListProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">投稿一覧</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/users"
            className="inline-block text-blue-600 hover:text-blue-800 underline"
          >
            ユーザー一覧を見る →
          </Link>
        </div>
      </main>
    </div>
  );
}
