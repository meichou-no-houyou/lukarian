import { IconBrandDiscord, IconBrandDiscordFilled, IconBrandFacebook, IconBrandFacebookFilled, IconBrandGoogle } from "@tabler/icons-react";
import Navbar from "../lib/components/navbar";
import Link from "next/link";
import Button from "../lib/components/button";
import { UndrawDoctorSplash } from "../lib/svg/UndrawDoctorSplash";

export default function Register() {
    return (
        <>
            <Navbar />
            <div className="h-[5rem]"></div>

            <div className="flex flex-col md:flex-row">
                <div className="bg-honeydew w-full md:w-1/3 flex flex-col items-start">
                    <div className="px-12 mx-auto flex flex-col gap-y-2">
                        <div className="h-[2.5rem]"></div>
                        <h1 className="font-bold text-3xl">Selamat Datang</h1>
                        <p>Bergabunglah dengan LukaRian! Daftarkan diri Anda sekarang untuk mendapatkan akses eksklusif untuk informasi terbaru.</p>
                        <p className="py-8">Sudah punya akun? <span className="text-blue-700 font-bold"><Link href="/login">Masuk</Link></span> sekarang!</p>
                        <UndrawDoctorSplash width={348} height={286} className="hidden md:block"></UndrawDoctorSplash>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-1">
                    <div className="h-screen"></div>

                    <form action="/login">
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-center text-4xl">Daftar</h1>
                            <br />
                            <div className="flex gap-x-10 ">
                                <Button type="success" className="rounded-full p-2 md:p-2">
                                    <IconBrandGoogle />
                                </Button>

                                <Button type="success" className="rounded-full p-2 md:p-2">
                                    <IconBrandDiscord />
                                </Button>

                                <Button type="success" className="rounded-full p-2 md:p-2">
                                    <IconBrandFacebook />
                                </Button>

                            </div>
                            <br />
                            <div className="flex flex-col md:flex-row w-full gap-x-2">
                                <input type="text" className="rounded-md shadow mb-2 py-2.5 border-slate-500 border px-2" placeholder="Nama Depan" required />
                                <input type="text" className="rounded-md shadow mb-2 py-2.5 border-slate-500 border px-2" placeholder="Nama Belakang" required />
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <input type="text" className="rounded-md mb-2 w-full h-9 border-slate-500 border px-2" placeholder="Username" required />
                                <input type="password" className="rounded-md mb-2 w-full h-9 border-slate-500 border px-2" placeholder="Password" required />
                                <input type="password" className="rounded-md mb-2 w-full h-9 border-slate-500 border px-2" placeholder="Konfirmasi Password" required />
                                <br />
                                <Button type="success">Daftar Sekarang</Button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
}