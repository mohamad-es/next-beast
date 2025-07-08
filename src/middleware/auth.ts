import { cookies } from "next/headers";

export async function getUserSession() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("jwtUser")?.value;

  if (!token) return { isAuthenticated: false };

  return {
    isAuthenticated: true,
  };
}
