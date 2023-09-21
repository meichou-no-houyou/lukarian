import { IconBrandDiscord, IconBrandDiscordFilled, IconBrandFacebook, IconBrandFacebookFilled, IconBrandGoogle } from "@tabler/icons-react";
import Navbar from "../lib/components/navbar";
import Link from "next/link";
import Button from "../lib/components/button";

export default function Login() {
    return (
        <>
            <Navbar />
            <div className="h-[5rem]"></div>

            <div className="w-full grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-3">
                <div className="bg-honeydew w-full flex items-start px-12">
                    <div className="max-w-lg mx-auto grid grid-rows-4 justify-center">
                        <h1 className="mt-10 font-bold text-3xl text-center ">Selamat Datang Kembali</h1>
                        <p className="text-base text-justify">Kamu bisa melanjutkan perjalananmu mempelajari cara menangani luka dengan login terlebih dahulu.</p>
                    </div>
                </div>
                <div className="flex items-center col-span-2 justify-center">
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
                            <IconBrandDiscord/> 
                            </Button>
                            
                            <Button type="success" className="rounded-full p-2 md:p-2" >
                            <IconBrandFacebook/>
                            </Button>
                    
                            </div>
                            <br />
                            <input type="text" className="rounded-md mb-2 w-80 h-9 border-slate-500 border px-2" placeholder="Username" />
                            <input type="password" className="rounded-md mb-2 w-80 h-9 border-slate-500 border px-2" placeholder="Password"   />
                            <br />
                            <p className="font-bold text-sm text-center">Lupa Password? <Link href={""} className="text-blue-600">Reset</Link> disini</p>
                            <br />
                            <Button type = "success">Masuk</Button>
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
