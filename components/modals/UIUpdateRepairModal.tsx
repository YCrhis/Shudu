import { useEffect, useState } from "react";

import UIInput from "@/components/UI/UIInput";
import { RepairI } from "@/types/repair";
import { PostCall } from "@/helpers/PostCall";


interface UIUpdateRepairModalProps {
  isOpen: boolean;
  repair: RepairI;
  onClose: () => void;
  lodInformation: () => void;
}

const UIUpdateRepairModal = ({
  isOpen,
  repair,
  onClose,
  lodInformation,
}: UIUpdateRepairModalProps) => {

  const [form, setForm] = useState({
    ...repair,
    title: repair?.title,
    description: repair?.description,
    name_vehicle: repair?.name_vehicle,
    vehicle_type: repair?.vehicle_type,
    license_plate: repair?.license_plate,
    vehicle_model: repair?.vehicle_model,
  })

  const handleChangeForm = (name: string, e: string) => {
    setForm((prev) => ({ ...prev, [name]: e }));
  };

  if (!isOpen || !repair) {
    return null;
  }

  const handleSubmit = async(
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    await PostCall({url: `/api/repair/${repair.id}`, data: form , type:"PUT"})
    lodInformation();
    onClose();

  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="update-repair-title"
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113] shadow-2xl shadow-black/50"
      >
        {/* Top accent */}
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-amber-500" />

        {/* Header */}
        <div className="flex shrink-0 items-start justify-between border-b border-zinc-800 px-6 py-5 sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-500">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 20h9"
                  strokeLinecap="round"
                />

                <path
                  d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <h2
                id="update-repair-title"
                className="text-lg font-bold text-zinc-100"
              >
                Update repair
              </h2>

              <p className="mt-1 text-xs text-zinc-600">
                Update the repair and vehicle information.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-zinc-900 hover:text-zinc-300"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M18 6 6 18"
                strokeLinecap="round"
              />

              <path
                d="m6 6 12 12"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto"
        >
          <div className="space-y-6 p-6 sm:p-7">
            {/* Repair information */}
            <section>
              <div className="mb-4">
                <h3 className="text-sm font-bold text-zinc-200">
                  Repair information
                </h3>

                <p className="mt-1 text-xs text-zinc-600">
                  Modify the information describing the repair.
                </p>
              </div>

              <div className="space-y-5">
                <UIInput
                  id="update-title"
                  name="title"
                  label="Repair title"
                  placeholder="e.g. Hydraulic system repair"
                  value={form?.title}
                  onChange={(event) =>
                    handleChangeForm("title",event.target.value)
                  }
                  required
                />

                <div>
                  <label
                    htmlFor="update-description"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Description
                    <span className="ml-1 text-amber-500">
                      *
                    </span>
                  </label>

                  <textarea
                    id="update-description"
                    name="description"
                    value={form?.description}
                    onChange={(event) =>
                      handleChangeForm("description",event.target.value)
                    }
                    placeholder="Describe the problem, symptoms and required work..."
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm leading-6 text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
                  />
                </div>
              </div>
            </section>

            {/* Vehicle information */}
            <section className="border-t border-zinc-800 pt-6">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-zinc-200">
                  Vehicle information
                </h3>

                <p className="mt-1 text-xs text-zinc-600">
                  Update the vehicle information associated with
                  this repair.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <UIInput
                  id="update-vehicle-name"
                  name="vehicleName"
                  label="Vehicle name"
                  placeholder="e.g. Volvo FMX 540"
                  value={form?.name_vehicle}
                  onChange={(event) =>
                    handleChangeForm("name_vehicle",event.target.value)
                  }
                  required
                />

                <UIInput
                  id="update-vehicle-type"
                  name="vehicleType"
                  label="Vehicle type"
                  placeholder="e.g. Dump Truck"
                  value={form?.vehicle_type}
                  onChange={(event) =>
                    handleChangeForm("vehicle_type",event.target.value)
                  }
                  required
                />

                <UIInput
                  id="update-vehicle-plate"
                  name="vehiclePlate"
                  label="License plate"
                  placeholder="e.g. ABC-742"
                  value={form?.license_plate}
                  onChange={(event) =>
                    handleChangeForm("license_plate",event.target.value)
                  }
                />

                <UIInput
                  id="update-vehicle-model"
                  name="vehicleModel"
                  label="Model / year"
                  placeholder="e.g. 2022"
                  value={form?.vehicle_model}
                  onChange={(event) =>
                    handleChangeForm("vehicle_model",event.target.value)
                  }
                />
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="flex shrink-0 flex-col-reverse gap-3 border-t border-zinc-800 bg-[#111113] px-6 py-4 sm:flex-row sm:justify-end sm:px-7">
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-xl border border-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-400 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200 sm:w-auto"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-400 sm:w-auto"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UIUpdateRepairModal;