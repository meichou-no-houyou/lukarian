import Link from "next/link";
import Navbar from "../lib/components/navbar";

export default function Register() {
    return (
        <>
            <Navbar />
            <div className="h-[5rem]"></div>

            <div className="w-full grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-3">
                <div className="bg-honeydew w-full flex items-start">
                    <div className="px-12 mx-auto flex flex-col gap-y-2">
                    <div className="h-[2.5rem]"></div>
                        <h1 className="font-bold text-3xl">Selamat Datang</h1>
                        <p>Bergabunglah dengan LukaRian! Daftarkan diri Anda sekarang untuk mendapatkan akses eksklusif untuk informasi terbaru.</p>
                        <p>Sudah punya akun? <span className="text-blue-700 font-bold"><Link href="/login">Masuk</Link></span> sekarang!</p>
                    </div>
                </div>
                <div className="flex items-center col-span-2 justify-center">
                    <div className="h-screen"></div>

                    <form>
                        <div className="flex flex-col mb-2">
                            <input type="text" className="rounded-md shadow" />
                            <input type="password" className="rounder-md shadow" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}