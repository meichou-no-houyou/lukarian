"use client";
import { IconSearch } from "@tabler/icons-react";
import Button from "./button";
import { LukarianIcon } from "../svg/LukarianIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const params = useSearchParams();
    const [query, setQuery] = useState(params.get("q") ?? "");
    const [isOpen, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!router || !query) return;
        router.replace(`/search?q=${encodeURIComponent(query)}`);
    }, [router, query]);

    return (
        <nav className="bg-honeydew fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center gap-x-2">
                    <LukarianIcon className="w-9 h-9 md:w-12 md:h-12" width={52} height={52} />
                    <span className="text-asparagus self-center text-2xl font-semibold whitespace-nowrap">
                        Luka<span className="!text-pistachio">Rian</span>
                    </span>
                </Link>
                <button
                    onClick={() => setOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-pistachio rounded-lg md:hidden hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-success focus:ring-opacity-40"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-teagreen md:bg-honeydew">
                        <li>
                            <form className="items-center flex">
                                <input
                                    className="text-white w-full md:w-fit focus:outline-none focus:ring-2 focus:ring-opacity-40 focus:ring-success h-8 px-2 rounded-l-md bg-pistachio"
                                    type="text"
                                    placeholder="Cari artikel"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                ></input>
                                <button className="h-8 px-2 rounded-r-md bg-pistachio text-white font-bold border-l-slate-400 border-l-2">
                                    <IconSearch />
                                </button>
                            </form>
                        </li>
                        <li>
                            <Link href="/login">
                                <Button type="success" className="px-4 py-1 md:py-1 md:px-4 mt-2 md:mt-0">
                                    Login
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
