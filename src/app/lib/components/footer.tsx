import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="bg-honeydew w-full flex items-center py-8">
                <footer className="max-w-screen-xl w-full mx-auto grid grid-cols-1 grid-rows-2 gap-y-4 md:grid-rows-1 md:grid-cols-3 justify-between px-4 md:px-0">
                    <div className="flex flex-col gap-y-4 text-justify">
                        <div className="flex items-center gap-x-3 mb-2">
                            <Image src="/images/icon.svg" className="w-9 h-9 md:w-12 md:h-12" width={52} height={52} alt="LukaRian Icon" />
                            <h1 className="text-asparagus font-bold text-lg">
                                Luka<span className="!text-pistachio">Rian</span>
                            </h1>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
                            ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                        </p>
                        <p>
                            Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
                            sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
                        </p>
                    </div>
                    <div className="flex gap-x-4 col-span-2 ml-auto justify-items-end">
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