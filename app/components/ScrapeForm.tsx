"use client";
import React, { useState } from "react";

export default function ScrapeForm() {
  const [text, setText] = useState<string>("");

  function handleChange(event: any) {
    setText(event.target.value);
  }
  async function handleSubmit(event: any) {
    event.preventDefault();

    try {
      if (text !== "") {
        await fetch("/api/scrape", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: text }),
        });
      } else {
        return;
      }
      setText("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={text}
        type="text"
        placeholder="Enter Product"
        className="w-72 h-12 indent-4 rounded-md bg-slate-200 focus:outline-none"
      />
      <input
        type="submit"
        value="find"
        className="size-12 bg-blue-900 rounded-md text-white cursor-pointer"
      />
    </form>
  );
}
