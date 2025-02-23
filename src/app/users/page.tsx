import { User } from '@/types/user';
import Link from 'next/link';

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 3600 } // 1時間ごとにキャッシュを更新
  });

  if (!res.ok) {
    throw new Error('ユーザーの取得に失敗しました');
  }

  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ユーザー一覧</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <article
            key={user.id}
            className="p-6 border rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <div className="space-y-2 text-gray-600">
              <p>
                <span className="font-medium">ユーザー名:</span> {user.username}
              </p>
              <p>
                <span className="font-medium">メール:</span> {user.email}
              </p>
              <p>
                <span className="font-medium">会社:</span> {user.company.name}
              </p>
              <p>
                <span className="font-medium">住所:</span><br />
                {user.address.street}, {user.address.suite}<br />
                {user.address.city} {user.address.zipcode}
              </p>
              <p>
                <span className="font-medium">電話:</span> {user.phone}
              </p>
              <p>
                <span className="font-medium">Webサイト:</span>{' '}
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {user.website}
                </a>
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/posts"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          投稿一覧を見る →
        </Link>
      </div>
    </main>
  );
}
