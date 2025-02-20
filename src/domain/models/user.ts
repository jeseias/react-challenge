export type UserModel = {
  id?: string;
  username: string;
  email: string;
  password?: string;
  journalIds: string[] | null;
}
