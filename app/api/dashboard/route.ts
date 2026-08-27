// app/api/users/route.ts

import { GetAllUsers } from "@/actions/get-user";
import { ListRepairs } from "@/actions/repair";
import { NextResponse } from "next/server";

export async function GET() {
    const users = await GetAllUsers();
    const repairs = await ListRepairs();

    const response = {
        users: users.data?.length,
        repairs,
    }

    return NextResponse.json(response);
}