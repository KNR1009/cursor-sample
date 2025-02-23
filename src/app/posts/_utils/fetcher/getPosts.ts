/**
 * @file 投稿データ取得用のフェッチャー
 * @description JSONPlaceholderから投稿データを取得する関数
 */
import { Post } from '@/types/post';

export async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('投稿の取得に失敗しました');
  }

  return res.json();
}
