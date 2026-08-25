import { InsertRepair } from "@/actions/repair";
import { RepairI } from "@/types/repair";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const repair: RepairI = await request.json();
    const response = await InsertRepair(repair);

    return NextResponse.json(response);
}