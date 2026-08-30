import { statusOptions } from "@/helpers/data";
import UISelect from "../UI/UISelect";
import { useState } from "react";
import { RepairI } from "@/types/repair";
import UIInput from "../UI/UIInput";
import { PostCall } from "@/helpers/PostCall";

interface Props {
    detailRepair: RepairI 
}

const UpdateForm = ({detailRepair}: Props) => {
  const [form, setForm] = useState({
     ...detailRepair,
    end_date: detailRepair.end_date ? detailRepair.end_date.split("T")[0] : "",
    status: detailRepair.status,
  });

  const handleChangeForm = (name: string, e: string) => {
    setForm((prev) => ({ ...prev, [name]: e }));
  };

  const handleUpdateRepair = async() => {
    const response = await PostCall({url: `/api/repair/${detailRepair.id}`, data: form , type:"PUT"})
    console.log(response);
  }

  return (
    <div className="xl:sticky xl:top-24 xl:h-[calc(100vh-120px)]">
      <section className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113]">
        <div className="border-b border-zinc-800 px-5 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold">Fast Update</h2>

              <p className="mt-1 text-xs text-zinc-600">
                Update the important information
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto p-5">
          <UISelect
            id="status"
            name="status"
            label="Initial status"
            placeholder="Select a status"
            options={statusOptions}
            value={form.status}
            onChange={(event) => handleChangeForm("status", event.target.value)}
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
          <div>
            <button
                onClick={handleUpdateRepair}
              className="rounded-xl w-full bg-amber-500 px-6 py-3 text-sm font-bold text-black shadow-lg shadow-amber-500/10 transition hover:bg-amber-400"
            >
              Update repair
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateForm;
