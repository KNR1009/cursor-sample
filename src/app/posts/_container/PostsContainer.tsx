/**
 * @file 投稿一覧ページのコンテナコンポーネント
 * @description データ取得とプレゼンテーショナルコンポーネントの接続を担当
 */
import { PostList } from '@/features/posts/page/PostList';
import { getPosts } from '../_utils/fetcher/getPosts';

export async function PostsContainer() {
  const posts = await getPosts();
  return <PostList posts={posts} />;
}
