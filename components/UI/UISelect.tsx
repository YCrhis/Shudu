import type { SelectHTMLAttributes } from "react";

interface UISelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface UISelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  placeholder?: string;
  options: UISelectOption[];
  error?: string;
  hint?: string;
  containerClassName?: string;
}

const UISelect = ({
  label,
  placeholder,
  options,
  error,
  hint,
  containerClassName = "",
  className = "",
  id,
  required,
  ...props
}: UISelectProps) => {
  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          {label}

          {required && (
            <span className="ml-1 text-amber-500">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        <select
          id={id}
          required={required}
          {...props}
          className={`
            w-full appearance-none rounded-xl border
            bg-zinc-950 px-4 py-3 pr-10
            text-sm text-zinc-200
            outline-none transition
            disabled:cursor-not-allowed
            disabled:opacity-50
            ${
              error
                ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
                : "border-zinc-800 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
            }
            ${className}
          `}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Arrow */}
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="m6 9 6 6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {error ? (
        <p className="mt-2 text-xs text-red-400">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-2 text-xs text-zinc-600">
          {hint}
        </p>
      ) : null}
    </div>
  );
};

export default UISelect;