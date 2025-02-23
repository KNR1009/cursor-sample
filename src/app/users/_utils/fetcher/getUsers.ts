/**
 * @file ユーザーデータ取得用のフェッチャー
 * @description JSONPlaceholderからユーザーデータを取得する関数
 */
import { User } from '@/types/user';

export async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('ユーザーの取得に失敗しました');
  }

  return res.json();
}
