/**
 * @file 投稿カードのプレゼンテーショナルコンポーネント
 * @description 個々の投稿情報を表示するカードコンポーネント
 */
import { Post } from '@/types/post';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.body}</p>
      <div className="text-sm text-gray-500">
        投稿ID: {post.id} | ユーザーID: {post.userId}
      </div>
    </article>
  );
}
