"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      reset(); // Reset client state
      router.refresh(); // Rebooting server data
    });
  };
  return (
    <div className="m-4 p-4 bg-red-100 text-red-800 flex justify-center items-center rounded">
      <p>Ошибка: {error.message}</p>
      <button
        onClick={handleRetry}
        className="ml-2 px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
