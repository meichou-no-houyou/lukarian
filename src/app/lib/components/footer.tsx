import { LukarianIcon } from "../svg/LukarianIcon";

export default function Footer() {
    return (
        <>
            <div className="bg-honeydew w-full flex items-center py-8">
                <footer className="max-w-screen-xl w-full mx-auto grid grid-cols-1 grid-rows-2 gap-y-4 lg:grid-rows-1 lg:grid-cols-3 justify-between px-4 lg:px-0">
                    <div className="flex flex-col gap-y-4 text-justify">
                        <div className="flex items-center gap-x-3 mb-2">
                            <LukarianIcon className="w-9 h-9 md:w-12 md:h-12" width={52} height={52} />
                            <h1 className="text-asparagus font-bold text-lg">
                                Luka<span className="!text-pistachio">Rian</span>
                            </h1>
                        </div>
                        <p>
                            LukaRian adalah panduan dan teman setia Anda dalam menghadapi luka sehari-hari. Kami menyediakan informasi yang jelas dan panduan langkah demi langkah untuk penanganan pertolongan pertama yang benar, sehingga Anda dapat menjaga kesehatan Anda dan mencegah agar kondisi luka tidak semakin memburuk.
                        </p>
                        <p>
                            Dengan LukaRian, Anda tidak perlu merasa cemas saat menghadapi luka kecil, kami ada di sini untuk membantu Anda tetap sehat dan kuat dalam setiap situasi. Temukan solusi yang Anda butuhkan bersama LukaRian!
                        </p>
                    </div>
                    <div className="flex gap-x-4 col-span-2 lg:ml-auto lg:justify-normal justify-between">
                        <div className="text-night">
                            <h1 className="uppercase font-bold text-lg">Tentang Kami</h1>
                            <ul className="flex flex-col gap-y-1 mt-2">
                                <li>Kebijakan Privasi</li>
                                <li>Ketentuan Penggunaan</li>
                                <li>Pusat Bantuan</li>
                                <li>Source Code</li>
                            </ul>
                        </div>
                        <div className="text-night">
                            <h1 className="uppercase font-bold text-lg">Bantuan</h1>
                            <ul className="flex flex-col gap-y-1 mt-2">
                                <li>Daftar</li>
                                <li>Masuk</li>
                                <li>Perlindungan Konsumen</li>
                                <li>Credits</li>
                            </ul>
                        </div>
                    </div>
                    <p className="md:whitespace-nowrap">&copy; Copyright 2023 Meichou No Houyou - All Rights Reserved</p>
                </footer>
            </div>
        </>
    );
}
