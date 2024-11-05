"use client";

import Link from "next/link";
import { deleteCookie } from "cookies-next";

import useAuth from "../utils/authStore";
import { useRouter } from "next/navigation";

const SideMenuComponent = () => {
  const router = useRouter()
  const logout = useAuth(state => state.logout)

  const menuItems = [
    {
      title: ("products"),
      route: "/home/products",
    },
    {
      title: ("category"),
      route: "/home/category",
    },
    {
      title: ("orders"),
      route: "/home/orders",
    },
    {
      title: ("users"),
      route: "/home/users",
    },
  ];

  return (
    <div className="flex flex-col justify-between bg-blue-950 h-screen w-[15%] text-white px-5 pt-10">
     
      <div className="flex flex-col">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            className="py-4 border-b border-blue-900"
            href={item.route}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <button
        onClick={() => {
          deleteCookie("access_token");
          deleteCookie("refresh_token");
          logout()
          router.push("/login")
        }}
        className="px-4 py-2 text-white rounded-[24px] bg-red-600 mb-5"
      >
        {("logout")}
      </button>
    </div>
  );
};

export default SideMenuComponent;
