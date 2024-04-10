"use client";

import { useRouter } from "next/navigation";

export default function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <button
        disabled={!hasPrev}
        className="w-[100px] p-3 border-none rounded-sm text-white bg-black cursor-pointer disabled:bg-gray-900 disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className="w-[100px] p-3 border-none rounded-sm text-white bg-black cursor-pointer disabled:bg-gray-900 disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}
