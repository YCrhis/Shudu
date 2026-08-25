import { ReactNode, useEffect } from "react";

type ModalType = "success" | "error" | "warning" | "info";

interface UIModalProps {
  isOpen: boolean;
  onClose: () => void;

  title: string;
  message?: string;

  type?: ModalType;

  children?: ReactNode;

  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;

  actionLabel?: string;
  onAction?: () => void;
}

const modalConfig = {
  success: {
    icon: "✓",
    iconClass:
      "bg-green-500/10 text-green-400 border-green-500/20",
    accent: "bg-green-500",
    button:
      "bg-green-500 text-black hover:bg-green-400",
  },

  error: {
    icon: "!",
    iconClass:
      "bg-red-500/10 text-red-400 border-red-500/20",
    accent: "bg-red-500",
    button:
      "bg-red-500 text-white hover:bg-red-400",
  },

  warning: {
    icon: "!",
    iconClass:
      "bg-amber-500/10 text-amber-400 border-amber-500/20",
    accent: "bg-amber-500",
    button:
      "bg-amber-500 text-black hover:bg-amber-400",
  },

  info: {
    icon: "i",
    iconClass:
      "bg-blue-500/10 text-blue-400 border-blue-500/20",
    accent: "bg-blue-500",
    button:
      "bg-blue-500 text-white hover:bg-blue-400",
  },
};

const UIModalMessage = ({
  isOpen,
  onClose,
  title,
  message,
  type = "info",
  children,
  closeOnBackdrop = true,
  showCloseButton = true,
  actionLabel,
  onAction,
}: UIModalProps) => {
  const config = modalConfig[type];

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (
      closeOnBackdrop &&
      event.target === event.currentTarget
    ) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm sm:px-6"
      onMouseDown={handleBackdropClick}
      role="presentation"
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="ui-modal-title"
        aria-describedby={
          message ? "ui-modal-message" : undefined
        }
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113] shadow-2xl shadow-black/50"
      >
        {/* Top accent */}
        <div
          className={`absolute left-0 right-0 top-0 h-[2px] ${config.accent}`}
        />

        {/* Close button */}
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-zinc-900 hover:text-zinc-300"
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
        )}

        <div className="p-6 sm:p-7">
          {/* Icon */}
          <div
            className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border text-lg font-black ${config.iconClass}`}
          >
            {config.icon}
          </div>

          {/* Content */}
          <div className="pr-6">
            <h2
              id="ui-modal-title"
              className="text-xl font-bold tracking-tight text-zinc-100"
            >
              {title}
            </h2>

            {message && (
              <p
                id="ui-modal-message"
                className="mt-2 text-sm leading-6 text-zinc-500"
              >
                {message}
              </p>
            )}

            {children && (
              <div className="mt-5">
                {children}
              </div>
            )}
          </div>

          {/* Actions */}
          {(actionLabel || showCloseButton) && (
            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full rounded-xl border border-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-400 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200 sm:w-auto"
                >
                  Close
                </button>
              )}

              {actionLabel && (
                <button
                  type="button"
                  onClick={onAction}
                  className={`w-full rounded-xl px-5 py-2.5 text-sm font-bold transition sm:w-auto ${config.button}`}
                >
                  {actionLabel}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UIModalMessage;