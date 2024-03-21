import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function GetStartedSection() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-center">
        <h2 className="mb-4 text-5xl font-bold">Get started for free</h2>
        <p className="mb-6 text-lg">
          Play around with it first. Pay and add your team later.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button className="rounded-md bg-black px-6 py-2 text-white">
              Try InstaNotes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStartedSection;
