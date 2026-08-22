'use client'

import { useState } from "react";

const RepairDetail = () => {
  const [message, setMessage] = useState("");

  const repair = {
    id: "REP-00124",
    status: "In progress",
    vehicle: {
      name: "Volvo FMX 540",
      plate: "ABC-742",
      type: "Dump Truck",
      year: "2022",
      description:
        "Heavy-duty dump truck used for transporting construction materials and aggregates.",
    },
    repair: {
      title: "Hydraulic system repair",
      description:
        "The vehicle presented a hydraulic pressure problem during operation. The dump body was not reaching the required lifting height and the hydraulic system showed intermittent pressure loss.",
      createdAt: "August 20, 2026",
      deadline: "August 25, 2026",
    },
    workers: [
      {
        name: "Juan Pérez",
        role: "Lead mechanic",
        initials: "JP",
      },
      {
        name: "Carlos Mendoza",
        role: "Hydraulic technician",
        initials: "CM",
      },
    ],
  };

  const comments = [
    {
      id: 1,
      author: "Juan Pérez",
      role: "Employee",
      initials: "JP",
      message:
        "We identified a damaged hydraulic hose. We are replacing it and checking the pressure system.",
      date: "Today, 09:42",
      mine: false,
    },
    {
      id: 2,
      author: "Carlos Mendoza",
      role: "Employee",
      initials: "CM",
      message:
        "The replacement hose has already been installed. We are currently testing the system.",
      date: "Today, 11:15",
      mine: false,
    },
    {
      id: 3,
      author: "Pedro García",
      role: "Client",
      initials: "PG",
      message:
        "Thanks. Please let me know if the truck will be ready before the deadline.",
      date: "Today, 12:03",
      mine: true,
    },
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    console.log(message);

    setMessage("");
  };

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
              <p className="text-sm font-bold tracking-wide">
                VEHICLE WORKS
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Maintenance System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium">
                Pedro García
              </p>

              <p className="text-xs text-zinc-600">
                Client
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10 text-sm font-bold text-amber-500">
              PG
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-6 py-8 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <button className="text-zinc-600 transition hover:text-zinc-300">
            Repairs
          </button>

          <span className="text-zinc-800">
            /
          </span>

          <span className="text-zinc-400">
            {repair.id}
          </span>
        </div>

        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                {repair.repair.title}
              </h1>

              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                {repair.status}
              </span>
            </div>

            <p className="mt-2 font-mono text-sm text-zinc-600">
              {repair.id}
            </p>
          </div>

          <button className="w-fit rounded-xl border border-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900">
            Edit repair
          </button>
        </div>

        {/* Main layout */}
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
          {/* Left column */}
          <div className="space-y-6">
            {/* Repair description */}
            <section className="rounded-2xl border border-zinc-800 bg-[#111113]">
              <div className="border-b border-zinc-800 px-6 py-5">
                <h2 className="font-bold">
                  Repair information
                </h2>

                <p className="mt-1 text-sm text-zinc-600">
                  Details about the maintenance work
                </p>
              </div>

              <div className="p-6">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Description
                  </p>

                  <p className="max-w-4xl text-sm leading-7 text-zinc-400">
                    {repair.repair.description}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs text-zinc-600">
                      Created
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                      {repair.repair.createdAt}
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs text-zinc-600">
                      Deadline
                    </p>

                    <p className="mt-2 text-sm font-semibold text-amber-400">
                      {repair.repair.deadline}
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs text-zinc-600">
                      Status
                    </p>

                    <p className="mt-2 text-sm font-semibold text-amber-400">
                      {repair.status}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vehicle */}
            <section className="rounded-2xl border border-zinc-800 bg-[#111113]">
              <div className="border-b border-zinc-800 px-6 py-5">
                <h2 className="font-bold">
                  Vehicle
                </h2>

                <p className="mt-1 text-sm text-zinc-600">
                  Vehicle information and description
                </p>
              </div>

              <div className="p-6">
                <div className="flex flex-col gap-6 sm:flex-row">
                  {/* Vehicle visual */}
                  <div className="flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 sm:w-56">
                    <span className="text-6xl">
                      🚛
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold">
                        {repair.vehicle.name}
                      </h3>

                      <span className="rounded-md bg-zinc-900 px-2 py-1 text-xs text-zinc-500">
                        {repair.vehicle.type}
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-5">
                      <div>
                        <p className="text-xs text-zinc-600">
                          License plate
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {repair.vehicle.plate}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-zinc-600">
                          Year
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {repair.vehicle.year}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs text-zinc-600">
                        Description
                      </p>

                      <p className="mt-1 text-sm leading-6 text-zinc-500">
                        {repair.vehicle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Workers */}
            <section className="rounded-2xl border border-zinc-800 bg-[#111113]">
              <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
                <div>
                  <h2 className="font-bold">
                    Assigned employees
                  </h2>

                  <p className="mt-1 text-sm text-zinc-600">
                    Employees working on this repair
                  </p>
                </div>

                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-500">
                  {repair.workers.length} employees
                </span>
              </div>

              <div className="grid gap-3 p-6 sm:grid-cols-2">
                {repair.workers.map((worker) => (
                  <div
                    key={worker.name}
                    className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-500/10 font-bold text-amber-500">
                      {worker.initials}
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        {worker.name}
                      </p>

                      <p className="mt-1 text-xs text-zinc-600">
                        {worker.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column - chat */}
          <aside className="xl:sticky xl:top-24 xl:h-[calc(100vh-120px)]">
            <section className="flex h-full min-h-[600px] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113]">
              {/* Chat header */}
              <div className="border-b border-zinc-800 px-5 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-bold">
                      Repair conversation
                    </h2>

                    <p className="mt-1 text-xs text-zinc-600">
                      Employees & client
                    </p>
                  </div>

                  <div className="flex -space-x-2">
                    {["JP", "CM", "PG"].map((initials) => (
                      <div
                        key={initials}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#111113] bg-zinc-800 text-[9px] font-bold text-zinc-400"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 space-y-6 overflow-y-auto p-5">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className={`flex gap-3 ${
                      comment.mine
                        ? "flex-row-reverse"
                        : ""
                    }`}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-[10px] font-bold text-amber-500">
                      {comment.initials}
                    </div>

                    <div
                      className={`max-w-[80%] ${
                        comment.mine
                          ? "items-end"
                          : "items-start"
                      }`}
                    >
                      <div
                        className={`mb-1 flex items-center gap-2 ${
                          comment.mine
                            ? "justify-end"
                            : ""
                        }`}
                      >
                        <span className="text-xs font-semibold">
                          {comment.author}
                        </span>

                        <span className="text-[10px] text-zinc-700">
                          {comment.role}
                        </span>
                      </div>

                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          comment.mine
                            ? "rounded-tr-sm bg-amber-500 text-black"
                            : "rounded-tl-sm bg-zinc-900 text-zinc-300"
                        }`}
                      >
                        <p className="text-sm leading-6">
                          {comment.message}
                        </p>
                      </div>

                      <p
                        className={`mt-1 text-[10px] text-zinc-700 ${
                          comment.mine
                            ? "text-right"
                            : ""
                        }`}
                      >
                        {comment.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message input */}
              <div className="border-t border-zinc-800 p-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-2 focus-within:border-amber-500/40">
                  <textarea
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    placeholder="Write a message..."
                    rows={3}
                    className="w-full resize-none bg-transparent px-2 py-1 text-sm text-zinc-200 outline-none placeholder:text-zinc-700"
                  />

                  <div className="mt-2 flex items-center justify-between">
                    <button
                      type="button"
                      className="rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-900 hover:text-zinc-300"
                    >
                      📎
                    </button>

                    <button
                      type="button"
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      Send
                    </button>
                  </div>
                </div>

                <p className="mt-2 text-center text-[10px] text-zinc-700">
                  Messages are visible to employees and the client.
                </p>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default RepairDetail;