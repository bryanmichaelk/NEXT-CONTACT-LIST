"use client";
import React from "react";
import { useEffect, useState } from "react";
import MainLayout from "../../layout/Layout";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Image from "next/image";
import DefaultImage from "./../../../../public/default.png";

export default function Details() {
  const [filteredContacts, setFilteredContacts] = React.useState([]);
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.BASE_URL}/api/contacts`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        });
        const data = await response.json();
        const filtered = data.data.filter((contact) => contact.id === id);
        setFilteredContacts(filtered);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (filteredContacts.length === 0) return <p>Loading...</p>;

  return (
    <MainLayout>
      <section className={`min-h-screen  px-4 mb-10 pt-[110px]`}>
        <div className="max-w-screen-xl p-8 mx-auto shadow-xl rounded-lg">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <Image
              src={filteredContacts[0].img_url ?? DefaultImage}
              alt={filteredContacts[0].name}
              className="w-auto h-[64px] rounded-full object-cover"
              width={100}
              height={100}
            />
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {filteredContacts[0].name}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1"></div>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"></p>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-4 gap-2">
                Email: {filteredContacts[0].email}
              </div>
              <div className="flex flex-wrap items-center mt-4 gap-2">
                Created at: {filteredContacts[0].created_at}
              </div>
              <div className="flex flex-wrap items-center mt-4 gap-2">
                Updated at: {filteredContacts[0].updated_at}
              </div>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
              <Link href="/">
                <p className="text-gray-900 text-sm flex items-center gap-1 font-semibold">
                  <IoChevronBackOutline />
                  Back to Home
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
