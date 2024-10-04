"use client"

import Image from "next/image";
import ContactInput from "../components/containers/ContactInput";
import ContactList from "../components/containers/ContactList";

export default function Home() {
  return (
    <main className="bg-white max-w-[800px] my-[40px] mx-auto p-5 shadow rounded-[20px]">
      <ContactInput />
      <ContactList />
    </main>
  );
}
