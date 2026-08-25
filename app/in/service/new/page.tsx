"use client";

import { useEffect, useState } from "react";

import UIInput from "@/components/UI/UIInput";
import UISelect from "@/components/UI/UISelect";
import EmployeeCard from "@/components/repair/EmployeeCard";
import { User } from "@/types/user";
import { RepairI } from "@/types/repair";
import { PostCall } from "@/helpers/PostCall";
import UIModalMessage from "@/components/modals/UIModalMessage";
import { useRouter } from "next/navigation";
import UIAlert from "@/components/UI/UIAlert";

type AlertType = "good" | "bad";

interface AlertState {
  isOpen: boolean;
  message: string;
  type: AlertType;
}

const statusOptions = [
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "in_progress",
    label: "In progress",
  },
  {
    value: "completed",
    label: "Completed",
  },
  {
    value: "cancelled",
    label: "Cancelled",
  },
];

const CreateRepair = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState<RepairI>({
    name_vehicle: "",
    title: "",
    description: "",
    vehicle_type: "",
    end_date: "",
    init_date: new Date().toISOString(),
    license_plate: "",
    vehicle_model: "",
    status: "",
  });

  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
  const router = useRouter();

  const [alert, setAlert] = useState<AlertState>({
    isOpen: false,
    message: "",
    type: "good",
  });

  const toggleEmployee = (employeeId: string) => {
    setSelectedEmployees((current) =>
      current.includes(employeeId)
        ? current.filter((id) => id !== employeeId)
        : [...current, employeeId],
    );
  };

  const handleGoInit = () => {
    router.push("/in");
  };

  const validateForm = () => {
    const valid = !Object.values(form).some((f) => f === "");
    return valid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const badForm = validateForm();
    if (badForm) {
      setAlert({
        isOpen: true,
        message: "You forgot to complete the form.",
        type: "bad",
      });
      return;
    }
    const response = await PostCall({ data: form, url: "/api/repair" });
    if (response.success) {
      setModalOpen(true);
    }
  };

  const handleChangeForm = (name: string, e: string) => {
    setForm((prev) => ({ ...prev, [name]: e }));
  };

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("/api/users");

      const { data } = await response.json();
      setUsers(data);
    };

    loadUsers();
  }, []);

  return (
    <main className="min-h-screen bg-[#09090B] text-zinc-100">
      <UIAlert
        isOpen={alert.isOpen}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({message: "", type: "good", isOpen: false})}
      />

      <UIModalMessage
        isOpen={modalOpen}
        onClose={() => handleGoInit()}
        type="success"
        title="Repair created successfully"
        message="The repair has been registered and the assigned employees have been notified."
      />
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

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium">Pedro García</p>

              <p className="text-xs text-zinc-600">Administrator</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10 text-sm font-bold text-amber-500">
              PG
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-6 py-8 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <button
            type="button"
            className="text-zinc-600 transition hover:text-zinc-300"
          >
            Repairs
          </button>

          <span className="text-zinc-800">/</span>

          <span className="text-zinc-400">New repair</span>
        </div>

        {/* Page heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Maintenance
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Create new repair
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
            Register a new maintenance record and assign the employees
            responsible for the work.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* ================================================= */}
            {/* MAIN FORM */}
            {/* ================================================= */}

            <div className="space-y-6">
              {/* ============================================= */}
              {/* VEHICLE */}
              {/* ============================================= */}

              <section className="rounded-2xl border border-zinc-800 bg-[#111113]">
                <div className="border-b border-zinc-800 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                      🚛
                    </div>

                    <div>
                      <h2 className="font-bold">Vehicle</h2>

                      <p className="text-xs text-zinc-600">
                        Enter the information of the vehicle.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 p-6 sm:grid-cols-2">
                  <UIInput
                    id="name_vehicle"
                    name="name_vehicle"
                    label="Vehicle name"
                    placeholder="e.g. Volvo FMX 540"
                    value={form.name_vehicle}
                    onChange={(event) =>
                      handleChangeForm("name_vehicle", event.target.value)
                    }
                    required
                  />

                  <UIInput
                    id="vehicle_type"
                    name="vehicle_type"
                    label="Vehicle type"
                    placeholder="e.g. Dump Truck"
                    value={form.vehicle_type}
                    onChange={(event) =>
                      handleChangeForm("vehicle_type", event.target.value)
                    }
                    required
                  />
                  <UIInput
                    id="license_plate"
                    name="license_plate"
                    label="License plate"
                    placeholder="e.g. ABC-742"
                    value={form.license_plate}
                    onChange={(event) =>
                      handleChangeForm("license_plate", event.target.value)
                    }
                  />

                  <UIInput
                    id="vehicle_model"
                    name="vehicle_model"
                    label="Model / year"
                    placeholder="e.g. 2022"
                    value={form.vehicle_model}
                    onChange={(event) =>
                      handleChangeForm("vehicle_model", event.target.value)
                    }
                  />
                </div>
              </section>

              {/* ============================================= */}
              {/* REPAIR INFORMATION */}
              {/* ============================================= */}

              <section className="rounded-2xl border border-zinc-800 bg-[#111113]">
                <div className="border-b border-zinc-800 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                      🔧
                    </div>

                    <div>
                      <h2 className="font-bold">Repair information</h2>

                      <p className="text-xs text-zinc-600">
                        Describe the maintenance work required.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <UIInput
                    id="title"
                    name="title"
                    label="Repair title"
                    placeholder="e.g. Hydraulic system repair"
                    value={form.title}
                    onChange={(event) =>
                      handleChangeForm("title", event.target.value)
                    }
                    required
                  />

                  <div>
                    <label
                      htmlFor="description"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Description
                      <span className="ml-1 text-amber-500">*</span>
                    </label>

                    <textarea
                      id="description"
                      name="description"
                      value={form.description}
                      onChange={(event) =>
                        handleChangeForm("description", event.target.value)
                      }
                      placeholder="Describe the problem, symptoms and required work..."
                      rows={6}
                      required
                      className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm leading-6 text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
                    />

                    <p className="mt-2 text-xs text-zinc-600">
                      Provide enough information for the assigned employees to
                      understand the work required.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================= */}
              {/* EMPLOYEES */}
              {/* ============================================= */}

              <section className="rounded-2xl border border-zinc-800 bg-[#111113]">
                <div className="border-b border-zinc-800 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                      👷
                    </div>

                    <div>
                      <h2 className="font-bold">Assigned employees</h2>

                      <p className="text-xs text-zinc-600">
                        Select one or more employees responsible for this
                        repair.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 p-6 sm:grid-cols-2">
                  {users.map((employee) => {
                    const selected = selectedEmployees.includes(employee.id);

                    return (
                      <EmployeeCard
                        selected={selected}
                        employee={employee}
                        toggleEmployee={toggleEmployee}
                        key={employee.id}
                      />
                    );
                  })}
                </div>

                <div className="border-t border-zinc-800 px-6 py-4">
                  <p className="text-xs text-zinc-600">
                    {selectedEmployees.length === 0
                      ? "No employees selected."
                      : `${selectedEmployees.length} employee${
                          selectedEmployees.length > 1 ? "s" : ""
                        } selected.`}
                  </p>
                </div>
              </section>

              {/* ============================================= */}
              {/* SCHEDULE */}
              {/* ============================================= */}

              <section className="rounded-2xl border border-zinc-800 bg-[#111113]">
                <div className="border-b border-zinc-800 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                      ⏱
                    </div>

                    <div>
                      <h2 className="font-bold">Maintenance schedule</h2>

                      <p className="text-xs text-zinc-600">
                        Define the status and expected deadline.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 p-6 sm:grid-cols-2">
                  <UISelect
                    id="status"
                    name="status"
                    label="Initial status"
                    placeholder="Select a status"
                    options={statusOptions}
                    value={form.status}
                    onChange={(event) =>
                      handleChangeForm("status", event.target.value)
                    }
                    required
                  />

                  <UIInput
                    id="end_date"
                    name="end_date"
                    type="date"
                    label="Deadline"
                    value={form.end_date}
                    onChange={(event) =>
                      handleChangeForm("end_date", event.target.value)
                    }
                    required
                  />
                </div>
              </section>

              {/* ============================================= */}
              {/* ACTIONS */}
              {/* ============================================= */}

              <div className="flex flex-col-reverse gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  className="rounded-xl border border-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-400 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-black shadow-lg shadow-amber-500/10 transition hover:bg-amber-400"
                >
                  Create repair
                </button>
              </div>
            </div>

            {/* ================================================= */}
            {/* PREVIEW */}
            {/* ================================================= */}

            <aside className="xl:sticky xl:top-24 xl:self-start">
              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113]">
                <div className="border-b border-zinc-800 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                    Preview
                  </p>

                  <h2 className="mt-1 font-bold">Repair summary</h2>
                </div>

                <div className="space-y-3 p-5">
                  {/* Vehicle */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs uppercase tracking-wider text-zinc-600">
                      Vehicle
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-lg">
                        🚛
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">
                          {form.name_vehicle || "Vehicle name"}
                        </p>

                        <p className="mt-1 truncate text-xs text-zinc-600">
                          {form.vehicle_type || "Vehicle type"}
                        </p>
                      </div>
                    </div>

                    {(form.license_plate || form.vehicle_model) && (
                      <div className="mt-3 flex gap-2">
                        {form.license_plate && (
                          <span className="rounded-md bg-zinc-900 px-2 py-1 font-mono text-[10px] text-zinc-500">
                            {form.license_plate}
                          </span>
                        )}

                        {form.vehicle_model && (
                          <span className="rounded-md bg-zinc-900 px-2 py-1 text-[10px] text-zinc-500">
                            {form.vehicle_model}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Repair */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs uppercase tracking-wider text-zinc-600">
                      Repair
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                      {form.title || "No repair title"}
                    </p>

                    {form.description && (
                      <p className="mt-2 line-clamp-3 text-xs leading-5 text-zinc-600">
                        {form.description}
                      </p>
                    )}
                  </div>

                  {/* Status + Deadline */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                      <p className="text-xs text-zinc-600">Status</p>

                      <p className="mt-2 text-sm font-semibold text-amber-400">
                        {
                          statusOptions.find(
                            (item) => item.value === form.status,
                          )?.label
                        }
                      </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                      <p className="text-xs text-zinc-600">Deadline</p>

                      <p className="mt-2 text-sm font-semibold">
                        {form.end_date || "Not set"}
                      </p>
                    </div>
                  </div>

                  {/* Employees */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-zinc-600">Employees</p>

                      <span className="text-xs font-semibold text-amber-500">
                        {selectedEmployees.length}
                      </span>
                    </div>

                    <div className="mt-3 space-y-2">
                      {selectedEmployees.length === 0 ? (
                        <p className="text-xs text-zinc-700">
                          No employees assigned
                        </p>
                      ) : (
                        selectedEmployees.map((id) => {
                          const employee = users.find((item) => item.id === id);

                          if (!employee) {
                            return null;
                          }

                          return (
                            <div
                              key={employee.id}
                              className="flex items-center gap-2"
                            >
                              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/10 text-[9px] font-bold text-amber-500">
                                {employee.full_name}
                              </div>

                              <span className="text-xs text-zinc-400">
                                {employee.full_name}
                              </span>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="rounded-xl border border-amber-500/10 bg-amber-500/5 p-4">
                    <p className="text-xs font-semibold text-amber-500">
                      Before creating
                    </p>

                    <p className="mt-2 text-xs leading-5 text-zinc-600">
                      Make sure the vehicle information, assigned employees and
                      deadline are correct before creating the repair.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateRepair;
