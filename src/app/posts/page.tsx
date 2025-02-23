import { Post } from '@/types/post';

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 } // 1時間ごとにキャッシュを更新
  });

  if (!res.ok) {
    throw new Error('投稿の取得に失敗しました');
  }

  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">投稿一覧</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
            <div className="mt-2 text-sm text-gray-500">
              投稿ID: {post.id} | ユーザーID: {post.userId}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
