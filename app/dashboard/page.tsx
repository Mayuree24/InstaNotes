import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const generateNoteId = () => {
  return uuidv4();
};

function Dashboard() {
  return (
    <Link href={`/dashboard/note/${generateNoteId()}`}>Create a new note</Link>
  );
}

export default Dashboard;
