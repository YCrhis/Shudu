'use client'

import { GetCall } from "@/helpers/GetCall";
import { User } from "@/types/user";
import Link from "next/link";
import { useEffect, useState } from "react";

const Employees = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([])

  const loadUsers = async() => {
    const {data} = await GetCall({url: `/api/users`});
    setUsers(data);
  }

  useEffect(()=>{
    loadUsers();
  },[])

  const filteredEmployees = users.filter((employee) =>
    `${employee.full_name} ${employee.role}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2);
  };

  return (
    <main className="min-h-screen bg-[#09090B] text-zinc-100">


      {/* Content */}
      <div className="mx-auto max-w-[1600px] px-6 py-8 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <span className="text-zinc-600">
            Home
          </span>

          <span className="mx-2 text-zinc-800">
            /
          </span>

          <span className="text-zinc-400">
            Employees
          </span>
        </div>

        {/* Heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Team
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Employees
            </h1>

            <p className="mt-2 max-w-xl text-sm text-zinc-500">
              View the employees working on vehicle repairs
              and their maintenance history.
            </p>
          </div>

        </div>

        {/* Quick stats */}
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-[#111113] p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-600">
              Total employees
            </p>

            <p className="mt-2 text-3xl font-black">
              18
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#111113] p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-600">
              Active
            </p>

            <p className="mt-2 text-3xl font-black text-green-400">
              16
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#111113] p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-600">
              Vehicles repaired
            </p>

            <p className="mt-2 text-3xl font-black text-amber-500">
              136
            </p>
          </div>
        </div>

        {/* Employee table */}
        <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113]">
          {/* Table toolbar */}
          <div className="flex flex-col gap-4 border-b border-zinc-800 p-5 sm:p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-bold">
                All employees
              </h2>

              <p className="mt-1 text-xs text-zinc-600">
                {filteredEmployees.length} employees found
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600">
                ⌕
              </span>

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search employee..."
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-2.5 pl-9 pr-4 text-sm text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/50">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Employee
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Date hired
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Vehicles repaired
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Repairs
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-b border-zinc-800/70 transition last:border-0 hover:bg-zinc-900/50"
                  >
                    {/* Employee */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-500">
                          {getInitials(employee.full_name)}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-zinc-200">
                            {employee.full_name}
                          </p>

                          <p className="mt-1 text-xs text-zinc-600">
                            {employee.role}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-5">
                      <p className="text-sm text-zinc-400">
                        date
                      </p>
                    </td>

                    {/* Vehicles */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-zinc-200">
                          {employee?.repair_employees?.length}
                        </span>

                        <span className="text-xs text-zinc-600">
                          vehicles
                        </span>
                      </div>
                    </td>

                    {/* Repairs */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-zinc-200">
                          {employee.repair_employees?.length}
                        </span>

                        <span className="text-xs text-zinc-600">
                          completed
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                          employee.status === "Active"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-zinc-800 text-zinc-500"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            employee.status === "Active"
                              ? "bg-green-400"
                              : "bg-zinc-600"
                          }`}
                        />

                        {employee.status}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">
                      <Link href={`/in/employes/${employee.id}`} className="rounded-lg border border-zinc-800 px-3 py-2 text-xs font-semibold text-zinc-400 transition hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-amber-400">
                        View profile
                      </Link>
                    </td>
                  </tr>
                ))}

                {filteredEmployees.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-16 text-center"
                    >
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-xl">
                        👷
                      </div>

                      <p className="mt-4 text-sm font-semibold text-zinc-400">
                        No employees found
                      </p>

                      <p className="mt-1 text-xs text-zinc-600">
                        Try searching for another employee.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-zinc-800 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-zinc-600">
              Showing{" "}
              <span className="font-semibold text-zinc-400">
                {filteredEmployees.length}
              </span>{" "}
              employees
            </p>

            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-600">
                Previous
              </button>

              <button className="rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-black">
                1
              </button>

              <button className="rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-400 transition hover:bg-zinc-900">
                2
              </button>

              <button className="rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-400 transition hover:bg-zinc-900">
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Employees;