import { DetailRepairs } from "@/actions/repair";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const res = await DetailRepairs(id);

  return NextResponse.json(res);
}