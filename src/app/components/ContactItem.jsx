import React from "react";
import Link from "next/link";
import Image from "next/image";
import DefaultImage from "./../../../public/default.png";

export default function ContactItem({ imgUrl, name, email, onDelete, id,  }) {
  const href = `/${id}`;
  return (
    <div className="flex gap-5 justify-between items-center p-4 my-4 shadow rounded-lg transition duration-300 ease-in-out hover:-translate-y-1">
      <Link href={href} className="flex gap-5">
        <Image
          src={imgUrl ?? DefaultImage}
          alt={name}
          className="w-auto h-[64px] rounded-full object-cover"
          width={100}
          height={100}
        />

        <div className="flex flex-col gap-1 items-left justify-start w-full">
          <p className="text-lg font-medium">{name}</p>
          <p className="text-[14px] font-normal color-[#807a7a]">{email}</p>
        </div>
      </Link>

      <button
        className="text-white bg-[#ff0000] border-none p-2 text-xl transition duration-300 ease-in-out rounded-md w-[40px] box-border"
        onClick={onDelete}
      >
        x
      </button>
    </div>
  );
}
