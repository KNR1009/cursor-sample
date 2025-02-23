/**
 * @file ユーザーカードのプレゼンテーショナルコンポーネント
 * @description 個々のユーザー情報を表示するカードコンポーネント
 */
import { User } from '@/types/user';

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <article className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">{user.name}</h2>
      <div className="space-y-3 text-gray-600">
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
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {user.website}
          </a>
        </p>
      </div>
    </article>
  );
}
