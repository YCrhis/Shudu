import type { InputHTMLAttributes } from "react";

interface UIInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  hint?: string;
  containerClassName?: string;
}

const UIInput = ({
  label,
  error,
  hint,
  containerClassName = "",
  className = "",
  id,
  required,
  ...props
}: UIInputProps) => {
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

      <input
        id={id}
        required={required}
        {...props}
        className={`
          w-full rounded-xl border bg-zinc-950
          px-4 py-3 text-sm text-zinc-200
          outline-none transition
          placeholder:text-zinc-700
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${
            error
              ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
              : "border-zinc-800 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
          }
          ${className}
        `}
      />

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

export default UIInput;