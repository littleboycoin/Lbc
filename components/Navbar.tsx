"use client";

import { Navbar as Navbars } from "flowbite-react";

export default function Navbar() {
  return (
    <Navbars fluid className="!bg-transparent">
      <Navbars.Brand
        href=""
        className="transform-gpu rounded-md border-2 border-black !bg-[#bfa44b] p-1 transition-transform duration-300 hover:scale-110"
      >
        <div className="border-1 self-center whitespace-nowrap rounded-md border border-black !bg-[#e0c04a] p-2 text-4xl font-semibold">
          <span className="">LBC Token</span>
        </div>
      </Navbars.Brand>
      <Navbars.Toggle />
      <Navbars.Collapse>
        <Navbars.Link className="text-3xl !text-black lg:hover:!text-gray-400">
          Metamask
        </Navbars.Link>
        <Navbars.Link className="text-3xl !text-black lg:hover:!text-gray-400">
          Games
        </Navbars.Link>
        <Navbars.Link className="text-3xl !text-black lg:hover:!text-gray-400">
          Shop
        </Navbars.Link>
      </Navbars.Collapse>
    </Navbars>
  );
}
