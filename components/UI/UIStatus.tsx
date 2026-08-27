import type { RepairStatus } from "@/types/repair";

interface UIStatusProps {
  status?: RepairStatus | null;
}

const statusConfig = {
  pending: {
    label: "Pending",
    container: "bg-amber-500/10 text-amber-400",
    dot: "bg-amber-400",
  },

  in_progress: {
    label: "In progress",
    container: "bg-blue-500/10 text-blue-400",
    dot: "bg-blue-400",
  },

  completed: {
    label: "Completed",
    container: "bg-green-500/10 text-green-400",
    dot: "bg-green-400",
  },

  cancelled: {
    label: "Cancelled",
    container: "bg-red-500/10 text-red-400",
    dot: "bg-red-400",
  },

  unknown: {
    label: "No status",
    container: "bg-zinc-500/10 text-zinc-400",
    dot: "bg-zinc-500",
  },
};

const UIStatus = ({ status }: UIStatusProps) => {
  const config = status
    ? statusConfig[status]
    : statusConfig.unknown;

  return (
    <span
      className={`
        inline-flex items-center gap-2
        rounded-full
        px-3 py-1
        text-xs font-semibold
        ${config.container}
      `}
    >
      <span
        className={`
          h-1.5 w-1.5
          rounded-full
          ${config.dot}
        `}
      />

      {config.label}
    </span>
  );
};

export default UIStatus;