"use client";

import UIUpdateRepairModal from "@/components/modals/UIUpdateRepairModal";
import UpdateForm from "@/components/repair/UpdateForm";
import { formatDate } from "@/helpers/dateFormat";
import { GetCall } from "@/helpers/GetCall";
import { GetInitials } from "@/helpers/stringFormat";
import { RepairI } from "@/types/repair";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const RepairDetail = () => {
  const [repairDetail, setRepairDetail] = useState<RepairI | null>(null);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const params = useParams();
  const id = params.id;

  const lodInformation = async () => {
    setLoading(true);
    const { data } = await GetCall({ url: `/api/repair/${id}` });
    setRepairDetail(data);
    setLoading(false);
  };

  useEffect(() => {
    lodInformation();
  }, []);

  return (
    <main className="min-h-screen bg-[#09090B] text-zinc-100">
      {repairDetail && (
        <UIUpdateRepairModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          repair={repairDetail}
          key={repairDetail?.id}
          lodInformation={lodInformation}
        />
      )}
      <div className="mx-auto max-w-[1600px] px-6 py-8 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <button className="text-zinc-600 transition hover:text-zinc-300">
            Repairs
          </button>

          <span className="text-zinc-800">/</span>

          <span className="text-zinc-400">{repairDetail?.id}</span>
        </div>

        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                {repairDetail?.title}
              </h1>

              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                {repairDetail?.status}
              </span>
            </div>

            <p className="mt-2 font-mono text-sm text-zinc-600">
              {repairDetail?.id}
            </p>
          </div>

          <button
            className="w-fit rounded-xl border border-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900"
            onClick={() => setOpenModal(true)}
          >
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
                <h2 className="font-bold">Repair information</h2>

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
                    {repairDetail?.description}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs text-zinc-600">Created</p>

                    <p className="mt-2 text-sm font-semibold">
                      {formatDate(repairDetail?.init_date || "")}
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs text-zinc-600">Deadline</p>

                    <p className="mt-2 text-sm font-semibold text-amber-400">
                      {formatDate(repairDetail?.end_date || "")}
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs text-zinc-600">Status</p>

                    <p className="mt-2 text-sm font-semibold text-amber-400">
                      {repairDetail?.status}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vehicle */}
            <section className="rounded-2xl border border-zinc-800 bg-[#111113]">
              <div className="border-b border-zinc-800 px-6 py-5">
                <h2 className="font-bold">Vehicle</h2>

                <p className="mt-1 text-sm text-zinc-600">
                  Vehicle information and description
                </p>
              </div>

              <div className="p-6">
                <div className="flex flex-col gap-6 sm:flex-row">
                  {/* Vehicle visual */}
                  <div className="flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 sm:w-56">
                    <span className="text-6xl">🚛</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold">
                        {repairDetail?.name_vehicle}
                      </h3>

                      <span className="rounded-md bg-zinc-900 px-2 py-1 text-xs text-zinc-500">
                        {repairDetail?.vehicle_type}
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-5">
                      <div>
                        <p className="text-xs text-zinc-600">License plate</p>

                        <p className="mt-1 text-sm font-medium">
                          {repairDetail?.license_plate}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-zinc-600">Year</p>

                        <p className="mt-1 text-sm font-medium">
                          {repairDetail?.vehicle_model}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Workers */}
            <section className="rounded-2xl border border-zinc-800 bg-[#111113]">
              <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
                <div>
                  <h2 className="font-bold">Assigned employees</h2>

                  <p className="mt-1 text-sm text-zinc-600">
                    Employees working on this repair
                  </p>
                </div>

                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-500">
                  {repairDetail?.repair_employees?.length} employees
                </span>
              </div>

              <div className="grid gap-3 p-6 sm:grid-cols-2">
                {repairDetail?.repair_employees?.map(({ profiles }) => (
                  <div
                    key={profiles.full_name}
                    className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-500/10 font-bold text-amber-500">
                      {GetInitials(profiles.full_name)}
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        {profiles.full_name}
                      </p>

                      <p className="mt-1 text-xs text-zinc-600">
                        {profiles.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {repairDetail && (
            <div>
              <UpdateForm detailRepair={repairDetail} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default RepairDetail;
