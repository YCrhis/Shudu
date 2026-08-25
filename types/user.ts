export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url: string;
  area_id: string | null;
  created_at: string;
  role: string;
}