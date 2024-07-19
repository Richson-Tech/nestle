import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  { id: 1, title: "About Us", url: "/" },
  { id: 2, title: "Our stories", url: "/services" },
  { id: 3, title: "Brands", url: "/about" },
  { id: 4, title: "Sustainability", url: "/contact" },
  { id: 5, title: "Nutrition", url: "/contact" },
  { id: 6, title: "Ask Nestle", url: "/contact" },
];

const rightLinks = [
  { id: 1, title: "Careers", url: "/" },
  { id: 2, title: "Investors", url: "/services" },
  { id: 3, title: "Media", url: "/about" },
];

const Navbar = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/logo.svg.png"
        alt="logo"
        width={222}
        height={54}
        className="p-5"
          />
      <nav className="w-full h-12 flex justify-between items-center mt-10 bg-[#E6E6E6]">
        <div className="flex flex-flex gap-3 items-start pl-6 ml-44">
          {links.map((item) => (
            <Link key={item.id} href={item.url}>
              <span className="text-lg font-serif py-2">{item.title}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-flex gap-3 items-end pr-6 mr-44">
          {rightLinks.map((item) => (
            <Link key={item.id} href={item.url}>
              <span className="text-lg font-serif py-2">{item.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
