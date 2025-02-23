import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ホーム</h1>
      <div className="space-y-4">
        <div>
          <Link
            href="/posts"
            className="text-blue-600 hover:text-blue-800 underline block"
          >
            投稿一覧を見る →
          </Link>
        </div>
        <div>
          <Link
            href="/users"
            className="text-blue-600 hover:text-blue-800 underline block"
          >
            ユーザー一覧を見る →
          </Link>
        </div>
      </div>
    </main>
  );
}
