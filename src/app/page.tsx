"use client";

import { useState } from "react";

export default function Home() {

  const [url, setUrl] = useState("");
  const [short, setShort] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    setShort(`${window.location.origin}/u/${data.id}`)
  }



  return (
    <main className="mx-auto mt-12 max-w-lg space-y-6 rounded-xl border p-6 shadow">
      <h1 className="text-2x1 font-bold">URL Shortener</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="flex-1 rounded border px-3 py-2"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter long URL"
        />
        <button className="rounded bg-blue-600 px-4 py-2 text-white">Shorten</button>
      </form>
      {short && (
        <p className="text-green-700">
          Short URL: <a href={short} className="underline">{short}</a>
        </p>
      )}
    </main>
  );
}
