import Button from "./button";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <div className="w-full fixed items-center bg-honeydew">
                <nav className="max-w-screen-xl mx-auto w-full py-4 flex justify-between">
                    <div className="flex items-center gap-x-3">
                        <Image src="/images/icon.svg" width={52} height={52} alt="LukaRian Icon" />
                        <h1 className="text-asparagus font-bold text-md">
                            Luka<span className="!text-pistachio">Rian</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <form className="flex items-center">
                            <input
                                className="focus:outline-none focus:ring-2 focus:ring-opacity-40 focus:ring-success h-8 px-2 rounded-l-md bg-teagreen"
                                type="text"
                                placeholder="Cari artikel"
                            ></input>
                            <button className="h-8 px-2 rounded-r-md bg-teagreen text-white font-bold border-l-slate-400 border-l-2">
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5 16L11.5 11M1.5 6.83333C1.5 7.59938 1.65088 8.35792 1.94404 9.06565C2.23719 9.77339 2.66687 10.4164 3.20854 10.9581C3.75022 11.4998 4.39328 11.9295 5.10101 12.2226C5.80875 12.5158 6.56729 12.6667 7.33333 12.6667C8.09938 12.6667 8.85792 12.5158 9.56565 12.2226C10.2734 11.9295 10.9164 11.4998 11.4581 10.9581C11.9998 10.4164 12.4295 9.77339 12.7226 9.06565C13.0158 8.35792 13.1667 7.59938 13.1667 6.83333C13.1667 6.06729 13.0158 5.30875 12.7226 4.60101C12.4295 3.89328 11.9998 3.25022 11.4581 2.70854C10.9164 2.16687 10.2734 1.73719 9.56565 1.44404C8.85792 1.15088 8.09938 1 7.33333 1C6.56729 1 5.80875 1.15088 5.10101 1.44404C4.39328 1.73719 3.75022 2.16687 3.20854 2.70854C2.66687 3.25022 2.23719 3.89328 1.94404 4.60101C1.65088 5.30875 1.5 6.06729 1.5 6.83333Z"
                                        stroke="#E8F4DC"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </form>
                        <Button type="success" className="px-4 py-1">
                            Login
                        </Button>
                    </div>
                </nav>
            </div>
        </>
    );
}
