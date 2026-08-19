import { createClient } from "@/supabase/server";

export default async function HomePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main>
      {user ? (
        <div>
          <h1>Logged in!</h1>

          <p>Email: {user.email}</p>

          <p>Name: {user.user_metadata?.full_name}</p>

          {user.user_metadata?.avatar_url && (
            <img
              src={user.user_metadata.avatar_url}
              alt={user.user_metadata?.full_name ?? "Profile"}
              width={50}
              height={50}
            />
          )}
        </div>
      ) : (
        <h1>Not logged in</h1>
      )}
    </main>
  );
}