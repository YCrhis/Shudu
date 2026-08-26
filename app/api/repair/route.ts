import { InsertEmployeeRepair, InsertRepair } from "@/actions/repair";
import { RepairI } from "@/types/repair";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const repair = await request.json();
  let response;
  switch (repair.typePost) {
    case "repair":
      response = await InsertRepair(repair);
      break;
    case "employee-repair":
      response = await InsertEmployeeRepair(repair.users, repair.id);
      break;

    default:
      console.log("nothing :c");
      break;
  }
  return NextResponse.json(response);
}
