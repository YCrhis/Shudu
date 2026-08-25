import { User } from "@/types/user";

interface Props {
  employee: User;
  toggleEmployee: (id: string) => void;
  selected: boolean;
}

const EmployeeCard = ({ employee, toggleEmployee, selected }: Props) => {

  const employeeInitials = employee.full_name.split(" ").slice(0,2).map(t => t[0]).join("");

  return (
    <div
      key={employee.id}
      onClick={() => toggleEmployee(employee.id)}
      className={`flex items-center gap-4 rounded-xl border p-4 text-left transition ${
        selected
          ? "border-amber-500/40 bg-amber-500/5"
          : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
      }`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          selected ? "bg-amber-500 text-black" : "bg-zinc-900 text-zinc-500"
        }`}
      >
        {employeeInitials}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{employee.full_name}</p>

        <p className="mt-1 truncate text-xs text-zinc-600">{employee.role}</p>
      </div>

      <div
        className={`flex h-5 w-5 items-center justify-center rounded-md border ${
          selected
            ? "border-amber-500 bg-amber-500 text-black"
            : "border-zinc-700"
        }`}
      >
        {selected && <span className="text-xs font-black">✓</span>}
      </div>
    </div>
  );
};

export default EmployeeCard;
