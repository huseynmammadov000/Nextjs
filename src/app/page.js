"use client"

import { redirect } from "next/navigation";
import useAuth from "../utils/authStore";

const page = () => {
    const { isAuthenticated } = useAuth()
    redirect(`/${!isAuthenticated ? "login" : "home/products"}`);
}

export default page