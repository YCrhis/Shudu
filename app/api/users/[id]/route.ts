// app/api/users/route.ts

import { GetUserById } from "@/actions/get-user";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const users = await GetUserById(id);

  return NextResponse.json(users);
}
