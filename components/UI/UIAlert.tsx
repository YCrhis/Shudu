import { useEffect } from "react";

interface UIAlertProps {
  isOpen: boolean;
  message: string;
  type: "good" | "bad";
  onClose?: () => void;
  duration?: number;
}

const UIAlert = ({
  isOpen,
  message,
  type,
  onClose,
  duration = 4000,
}: UIAlertProps) => {
  useEffect(() => {
    if (!isOpen || !onClose) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen, onClose, duration]);

  if (!isOpen) return null;

  const isGood = type === "good";

  return (
    <div
      className={`
        fixed bottom-5 right-5 z-[200]
        w-[calc(100%-2.5rem)] max-w-sm
        overflow-hidden
        rounded-xl
        border
        bg-[#111113]
        shadow-2xl shadow-black/40
        animate-[slideIn_0.25s_ease-out]
        ${
          isGood
            ? "border-green-500/20"
            : "border-red-500/20"
        }
      `}
    >
      <div className="flex items-center gap-3 px-4 py-3.5">
        {/* Icon */}
        <div
          className={`
            flex h-9 w-9 shrink-0 items-center justify-center
            rounded-lg border
            text-sm font-black
            ${
              isGood
                ? "border-green-500/20 bg-green-500/10 text-green-400"
                : "border-red-500/20 bg-red-500/10 text-red-400"
            }
          `}
        >
          {isGood ? "✓" : "!"}
        </div>

        {/* Message */}
        <p className="min-w-0 flex-1 text-sm leading-5 text-zinc-300">
          {message}
        </p>

        {/* Close */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close notification"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-zinc-900 hover:text-zinc-300"
          >
            <svg
              width="15"
              height="15"
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
        )}
      </div>

      {/* Progress bar */}
      <div className="h-[2px] w-full bg-zinc-900">
        <div
          className={`
            h-full
            ${
              isGood
                ? "bg-green-500"
                : "bg-red-500"
            }
            animate-[toastProgress_${duration}ms_linear_forwards]
          `}
        />
      </div>
    </div>
  );
};

export default UIAlert;