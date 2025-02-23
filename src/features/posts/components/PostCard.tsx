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
    <article className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
      <div className="mt-2 text-sm text-gray-500">
        投稿ID: {post.id} | ユーザーID: {post.userId}
      </div>
    </article>
  );
}
