import { IconBrandDiscord, IconBrandDiscordFilled, IconBrandFacebook, IconBrandFacebookFilled, IconBrandGoogle } from "@tabler/icons-react";
import Navbar from "../lib/components/navbar";
import Link from "next/link";
import Button from "../lib/components/button";
import Image from "next/image";
import { UndrawDoctor } from "../lib/svg/UndrawDoctor";
import { UndrawDoctorSplash } from "../lib/svg/UndrawDoctorSplash";

export default function Login() {
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

                    <form>
                        <div className=" flex flex-col items-center ">
                            <h1 className="font-bold text-center text-4xl">Masuk</h1>
                            <br />
                            <div className="flex gap-x-14 ">
                                <Button type="success" className="rounded-full p-2 md:p-2" >
                                    <IconBrandGoogle />
                                </Button>

                                <Button type="success" className="rounded-full p-2 md:p-2" >
                                    <IconBrandDiscord />
                                </Button>

                                <Button type="success" className="rounded-full p-2 md:p-2" >
                                    <IconBrandFacebook />
                                </Button>

                            </div>
                            <br />
                            <input type="text" className="rounded-md mb-2 w-80 h-9 border-slate-500 border px-2" placeholder="Username" />
                            <input type="password" className="rounded-md mb-2 w-80 h-9 border-slate-500 border px-2" placeholder="Password" />
                            <br />
                            <p className="font-bold text-sm text-center">Lupa Password? <Link href={""} className="text-blue-600">Reset</Link> disini</p>
                            <br />
                            <Button type="success">Masuk</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

{
    /* <div
className="flex items-center justify-center"
style={{
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#f4f4f4", // Ganti dengan warna latar belakang yang Anda inginkan
}}
>
<div
    style={{
        width: "336px",
        height: "auto", // Mengubah tinggi menjadi "auto" agar sesuai dengan kontennya
        padding: "10px",
        display: "flex",
        flexDirection: "column", // Menggunakan flex-direction: column untuk mengatur elemen ke atas-bawah
        alignItems: "center", // Menggunakan alignItems: flex-end untuk menggeser elemen ke kanan
    }}
>
    <h1 className="font-bold" style={{ marginBottom: "10px" }}>
        Masuk
    </h1>
    <input className="email" placeholder="Enter your email" style={{ marginBottom: "10px" }} />
    <input type="password" className="password" placeholder="Enter your password" />
</div>
</div> */
}
