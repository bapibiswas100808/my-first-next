"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    { path: "/", title: "Home" },
    { path: "/About", title: "About" },
    { path: "/Blog", title: "Blog" },
    { path: "/Service", title: "Service" },
    { path: "/Contact", title: "Contact" },
    { path: "/categories", title: "Categories" },
    { path: "/Post", title: "Posts" },
    { path: "/Meals", title: "Meals" },
  ];
  const handler = () => {
    router.push("/Login");
  };
  if (pathName.includes("dashboard"))
    return <div className="bg-green-600 text-center">dashboard layout</div>;
  return (
    <div>
      <nav className="flex justify-between max-w-[1170px] mx-auto ">
        <h2>Logo</h2>
        <ul className="flex space-x-5">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                className={`${pathName === link.path && "text-green-500"}`}
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={handler}
          className="btn bg-green-500 px-3 py-1 rounded-xl"
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
