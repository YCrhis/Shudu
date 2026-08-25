// app/api/users/route.ts

import { GetAllUsers } from "@/actions/get-user";
import { NextResponse } from "next/server";

export async function GET() {
    const users = await GetAllUsers();

    return NextResponse.json(users);
}