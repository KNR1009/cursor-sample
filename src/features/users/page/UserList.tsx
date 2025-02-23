/**
 * @file ユーザー一覧のプレゼンテーショナルコンポーネント
 * @description ユーザー一覧ページのメインコンテンツを表示するコンポーネント
 */
import { User } from '@/types/user';
import { UserCard } from '../components/UserCard';
import Link from 'next/link';

type UserListProps = {
  users: User[];
};

export function UserList({ users }: UserListProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ユーザー一覧</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="mt-8">
        <Link href="/posts" className="text-blue-600 hover:text-blue-800 underline">
          投稿一覧を見る →
        </Link>
      </div>
    </main>
  );
}
