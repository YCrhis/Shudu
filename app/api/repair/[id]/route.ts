import { DetailRepairs, UpdateRepair } from "@/actions/repair";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const res = await DetailRepairs(id);

  return NextResponse.json(res);
}

export async function PUT(
  request: Request,
) {
  const repair = await request.json();

  const res = await UpdateRepair(repair);

  return NextResponse.json(res);
}