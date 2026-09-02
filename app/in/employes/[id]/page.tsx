'use client'

import { GetCall } from "@/helpers/GetCall";
import { User } from "@/types/user";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EmployeeProfile = () => {

  const param = useParams();
  const id = param.id

  const [user, setUser] = useState<User|null>(null);

  const employee = {
    name: "Juan Pérez",
    role: "Lead Mechanic",
    email: "juan.perez@vehicleworks.com",
    hiredAt: "March 12, 2022",
    status: "Active",
    initials: "JP",
    vehiclesRepaired: 34,
    repairsCompleted: 48,
  };

  const vehicles = [
    {
      id: "REP-00124",
      vehicle: "Volvo FMX 540",
      type: "Dump Truck",
      repair: "Hydraulic system repair",
      date: "August 22, 2026",
      status: "In progress",
    },
    {
      id: "REP-00118",
      vehicle: "Caterpillar 740",
      type: "Heavy Equipment",
      repair: "Brake system maintenance",
      date: "August 18, 2026",
      status: "Completed",
    },
    {
      id: "REP-00112",
      vehicle: "Scania XT",
      type: "Dump Truck",
      repair: "Engine maintenance",
      date: "August 12, 2026",
      status: "Completed",
    },
    {
      id: "REP-00105",
      vehicle: "Komatsu HD785",
      type: "Heavy Equipment",
      repair: "Transmission repair",
      date: "August 05, 2026",
      status: "Completed",
    },
    {
      id: "REP-00098",
      vehicle: "Mercedes-Benz Arocs",
      type: "Dump Truck",
      repair: "Electrical system",
      date: "July 28, 2026",
      status: "Completed",
    },
  ];

  const loadUserInformation = async() => {
    const data = await GetCall({url: `/api/users/${id}`});
    setUser(data);
    console.log(data);
    // Sloansmoans 
  }

  useEffect(()=>{
    loadUserInformation();
  },[])

  return (
    <main className="min-h-screen bg-[#09090B] text-zinc-100">

      <div className="mx-auto max-w-[1400px] px-6 py-8 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <button className="text-zinc-600 transition hover:text-zinc-300">
            Employees
          </button>

          <span className="text-zinc-800">
            /
          </span>

          <span className="text-zinc-400">
            {employee.name}
          </span>
        </div>

        {/* Profile header */}
        <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113]">
          {/* Decorative background */}
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-amber-500/5 blur-[100px]" />

          <div className="relative flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              {/* Profile image */}
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/10 text-2xl font-black text-amber-500">
                  {employee.initials}
                </div>

                {/* Active indicator */}
                <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-[#111113] bg-green-500" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-black tracking-tight">
                    {employee.name}
                  </h1>

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                    Active
                  </span>
                </div>

                <p className="mt-2 text-sm font-medium text-amber-500">
                  {employee.role}
                </p>

                <p className="mt-2 text-sm text-zinc-600">
                  {employee.email}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="rounded-xl border border-zinc-800 px-4 py-2.5 text-sm font-semibold text-zinc-400 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200">
                Edit profile
              </button>

              <button className="rounded-xl border border-red-500/20 px-4 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-500/5">
                Deactivate
              </button>
            </div>
          </div>
        </section>

        {/* Employee information */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-[#111113] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Date hired
            </p>

            <p className="mt-3 text-lg font-bold">
              {employee.hiredAt}
            </p>

            <p className="mt-1 text-xs text-zinc-700">
              Employment start date
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#111113] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Vehicles repaired
            </p>

            <p className="mt-3 text-3xl font-black text-amber-500">
              {employee.vehiclesRepaired}
            </p>

            <p className="mt-1 text-xs text-zinc-700">
              Different vehicles
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#111113] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Repairs completed
            </p>

            <p className="mt-3 text-3xl font-black">
              {employee.repairsCompleted}
            </p>

            <p className="mt-1 text-xs text-zinc-700">
              Total repair records
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#111113] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Current status
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

              <span className="text-lg font-bold text-green-400">
                {employee.status}
              </span>
            </div>

            <p className="mt-1 text-xs text-zinc-700">
              Currently working
            </p>
          </div>
        </section>

        {/* Vehicle history */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113]">
          {/* Section header */}
          <div className="flex flex-col gap-4 border-b border-zinc-800 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold">
                Vehicles worked on
              </h2>

              <p className="mt-1 text-sm text-zinc-600">
                Vehicles and repairs assigned to {employee.name}.
              </p>
            </div>

            <div className="rounded-lg bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-500">
              {vehicles.length} recent records
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[850px] text-left">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/50">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Vehicle
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Repair
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Date
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
                {vehicles.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-zinc-800/70 transition last:border-0 hover:bg-zinc-900/50"
                  >
                    {/* Vehicle */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-lg">
                          🚛
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-zinc-200">
                            {item.vehicle}
                          </p>

                          <p className="mt-1 text-xs text-zinc-600">
                            {item.type}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Repair */}
                    <td className="px-6 py-5">
                      <p className="text-sm text-zinc-300">
                        {item.repair}
                      </p>

                      <p className="mt-1 font-mono text-xs text-zinc-700">
                        {item.id}
                      </p>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-5 text-sm text-zinc-500">
                      {item.date}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                          item.status === "Completed"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-amber-500/10 text-amber-400"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            item.status === "Completed"
                              ? "bg-green-400"
                              : "bg-amber-400"
                          }`}
                        />

                        {item.status}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">
                      <button className="rounded-lg border border-zinc-800 px-3 py-2 text-xs font-semibold text-zinc-400 transition hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-amber-400">
                        View repair
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-zinc-800 md:hidden">
            {vehicles.map((item) => (
              <div
                key={item.id}
                className="p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-lg">
                      🚛
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        {item.vehicle}
                      </p>

                      <p className="mt-1 text-xs text-zinc-600">
                        {item.type}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      item.status === "Completed"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-zinc-300">
                    {item.repair}
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-700">
                      {item.id}
                    </span>

                    <span className="text-xs text-zinc-600">
                      {item.date}
                    </span>
                  </div>
                </div>

                <button className="mt-4 w-full rounded-lg border border-zinc-800 py-2.5 text-xs font-semibold text-zinc-400 transition hover:border-amber-500/30 hover:text-amber-400">
                  View repair
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-zinc-800 px-6 py-4">
            <p className="text-xs text-zinc-600">
              Showing recent repair history
            </p>

            <button className="text-xs font-semibold text-amber-500 transition hover:text-amber-400">
              View all repairs →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EmployeeProfile;