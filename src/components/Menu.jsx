"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Services", url: "/services" },
  { id: 3, title: "About", url: "/about" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {open ? (
        <MdOutlineClose
          className="text-black"
          size="2rem"
          onClick={() => setOpen(false)}
        />
      ) : (
        <IoIosArrowDropdown
          className="text-black"
          size="2rem"
          onClick={() => setOpen(true)}
        />
      )}

      {open && (
        <div className="bg-white text-black absolute left-0 top-24 w-full mt-10 h-96 flex flex-col gap-8 pl-6 items-start justify-center text-3xl font-serif2 z-10 origin-center">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              <div className="flex items-center justify-between">
                <span className="text-lg font-serif">{item.title}</span>
                <IoIosArrowRoundForward className="ml-4" size={24} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Menu;
