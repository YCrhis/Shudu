"use client";

import UIInput from "@/components/UI/UIInput";
import UISelect from "@/components/UI/UISelect";
import UIStatus from "@/components/UI/UIStatus";
import { statusOptions } from "@/helpers/data";
import { RepairI } from "@/types/repair";
import { useEffect, useMemo, useState } from "react";

const Dashboard = () => {
  const [search, setSearch] = useState({
    id: "",
    name_vehicle: "",
    employee: "",
    status: "",
  });
  const [users, setUsers] = useState(0);
  const [repairs, setRepairs] = useState<RepairI[]>([]);

  const summary = [
    {
      label: "Total vehicles",
      value: "42",
      description: "Registered vehicles",
      icon: "🚛",
    },
    {
      label: "Employees",
      value: "18",
      description: "Active employees",
      icon: "👷",
    },
    {
      label: "Repairs",
      value: "126",
      description: "Registered repairs",
      icon: "🔧",
    },
  ];

  const handleChange = (name: string, value: string) => {
    console.log(name, value,  ' v')
    setSearch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const cleanSearch = () => {
    setSearch({ employee: "", id: "", name_vehicle: "", status: "" });
  };

  useEffect(() => {
    const loadInfo = async () => {
      const response = await fetch("/api/dashboard");
      const { users, repairs } = await response.json();
      setUsers(users);
      setRepairs(repairs.data);
    };
    loadInfo();
  }, []);

  const filteredRepairs = useMemo(() => {
    return repairs.filter((repair) => {
      const matchesId =
        !search.id || String(repair.id).includes(String(search.id));

      const matchesVehicle =
        !search.name_vehicle ||
        repair.name_vehicle
          .toLowerCase()
          .includes(search.name_vehicle.toLowerCase());

      const matchesEmployee =
        !search.employee ||
        (repair.repair_employees ?? []).some((e) =>
          e.profiles.full_name
            .toLowerCase()
            .includes(search.employee.toLowerCase()),
        );

      const matchesType =
        !search.status ||
        repair.status.includes(search.status.toLowerCase());

      return matchesId && matchesVehicle && matchesEmployee && matchesType;
    });
  }, [search, repairs]);

  console.log(search, " search");

  return (
    <main className="min-h-screen bg-[#09090B] text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-[#09090B]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-black">
              <span className="text-lg font-black">V</span>
            </div>

            <div>
              <p className="text-sm font-bold tracking-wide">VEHICLE WORKS</p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Maintenance System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification */}
            <button className="relative rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-900 hover:text-zinc-200">
              <span className="text-lg">🔔</span>

              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-amber-500" />
            </button>

            {/* User */}
            <div className="hidden items-center gap-3 border-l border-zinc-800 pl-4 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10 text-sm font-bold text-amber-500">
                JP
              </div>

              <div>
                <p className="text-sm font-medium">Juan Pérez</p>

                <p className="text-xs text-zinc-600">Administrator</p>
              </div>
            </div>

            <button className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-500 transition hover:border-zinc-700 hover:text-zinc-200">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-[1600px] px-6 py-8 lg:px-8">
        {/* Page heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Overview
          </p>

          <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Maintenance Dashboard
              </h1>

              <p className="mt-2 text-sm text-zinc-500">
                Keep track of vehicles, employees and repairs.
              </p>
            </div>

            <button className="flex w-fit items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-400">
              <span className="text-lg">+</span>
              New repair
            </button>
          </div>
        </div>

        {/* Summary cards */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {summary.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113] p-6 transition duration-300 hover:border-amber-500/30"
            >
              {/* Decorative glow */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-500/5 blur-2xl transition group-hover:bg-amber-500/10" />

              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    {item.label}
                  </p>

                  <p className="mt-3 text-4xl font-black tracking-tight">
                    {item.value}
                  </p>

                  <p className="mt-2 text-xs text-zinc-600">
                    {item.description}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-xl">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Repairs section */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113]">
          {/* Table header */}
          <div className="border-b border-zinc-800 p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-lg font-bold">Recent repairs</h2>

                <p className="mt-1 text-sm text-zinc-600">
                  Latest vehicle maintenance records
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-220 flex items-center gap-4">
                <UIInput
                  className="w-75"
                  label="Search employee"
                  value={search.employee}
                  onChange={(event) =>
                    handleChange("employee", event.target.value)
                  }
                />
                <UIInput
                  className="w-75"
                  label="Search vehicle"
                  value={search.name_vehicle}
                  onChange={(event) =>
                    handleChange("name_vehicle", event.target.value)
                  }
                />
                <UISelect
                  label="Search by status"
                  options={statusOptions}
                  value={search.status}
                  onChange={(event) =>
                    handleChange("status", event.target.value)
                  }
                />
                <div
                  className="bg-[#09090B]/90 w-50 h-10 flex border items-center justify-center rounded-md cursor-pointer"
                  onClick={cleanSearch}
                >
                  🗑
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-225 text-left">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/50">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Repair ID
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Vehicle
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Repair
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Employee
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
                {filteredRepairs.map((repair) => (
                  <tr
                    key={repair.id}
                    className="border-b border-zinc-800/70 transition hover:bg-zinc-900/50"
                  >
                    {/* ID */}
                    <td className="px-6 py-5">
                      <span className="font-mono text-sm font-medium text-amber-500">
                        {repair.id}
                      </span>
                    </td>

                    {/* Vehicle */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-lg">
                          🚛
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-zinc-200">
                            {repair.name_vehicle}
                          </p>

                          <p className="mt-0.5 text-xs text-zinc-600">
                            Heavy vehicle
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Repair */}
                    <td className="px-6 py-5">
                      <p className="text-sm text-zinc-300">
                        {repair.vehicle_type}
                      </p>
                    </td>

                    {/* Employee */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2.5">
                        {repair.repair_employees?.map((emp) => {
                          const employee = emp.profiles?.full_name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2);
                          return (
                            <div
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-zinc-400"
                              key={emp.profiles.id}
                            >
                              {employee}
                            </div>
                          );
                        })}

                        <span className="text-sm text-zinc-300">
                          {repair.repair_employees
                            ?.map((employee) => employee?.profiles?.full_name)
                            .join(", ")}
                        </span>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-5 text-sm text-zinc-500">
                      {repair.init_date}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <UIStatus
                        status={
                          repair?.status?.toLowerCase() as
                            | "pending"
                            | "in_progress"
                            | "completed"
                            | "cancelled"
                        }
                      />
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">
                      <button className="rounded-lg border border-zinc-800 px-3 py-2 text-xs font-semibold text-zinc-400 transition hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-amber-400">
                        View detail
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredRepairs.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center">
                      <p className="text-sm font-medium text-zinc-400">
                        No repairs found
                      </p>

                      <p className="mt-1 text-xs text-zinc-600">
                        Try searching with another term.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table footer */}
          <div className="flex items-center justify-between border-t border-zinc-800 px-6 py-4">
            <p className="text-xs text-zinc-600">
              Showing{" "}
              <span className="font-semibold text-zinc-400">
                {filteredRepairs.length}
              </span>{" "}
              repairs
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

export default Dashboard;
