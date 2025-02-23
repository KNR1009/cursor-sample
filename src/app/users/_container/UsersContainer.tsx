/**
 * @file ユーザー一覧ページのコンテナコンポーネント
 * @description データ取得とプレゼンテーショナルコンポーネントの接続を担当
 */
import { UserList } from '@/features/users/page/UserList';
import { getUsers } from '../_utils/fetcher/getUsers';

export async function UsersContainer() {
  const users = await getUsers();
  return <UserList users={users} />;
}
