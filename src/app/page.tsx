"use client";
import Image from "next/image";
import Navbar from "./lib/components/navbar";
import Button from "./lib/components/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
    const categories = ["Luka Lorem", "Luka Ipsum", "Luka Dolor", "Luka Sit", "Luka Amet", "Luka Consectetur", "Luka Adipiscing", "Luka Elit", "Luka Sed", "Luka Do", "Luka Apa"];
    return (
        <>
            <Navbar />
            <div className="h-[5rem]"></div>
            <section id="hero" className="w-full items-center bg-honeydew">
                <div className="max-w-screen-xl mx-auto w-full py-8 grid grid-cols-7 justify-between items-start">
                    <div className="col-span-4 flex flex-col gap-y-4">
                        <h1 className="font-bold text-4xl w-96 tracking-wide">Menemanimu Mengatasi Luka Harianmu</h1>
                        <p>
                            <span className="font-bold">LukaRian</span> adalah platform yang bertujuan untuk memberikan panduan dan informasi mengenai penanganan pertolongan pertama pada luka-luka
                            luka-luka umum yang dapat terjadi dalam kehidupan sehari-hari. Dengan LukaRian, Anda dapat mempelajari cara mengobati luka-luka tersebut dengan benar, sehingga dapat
                            mencegahmencegah agar agar kondisi luka tidak semakin memburuk. Yuk cari tahu lebih lanjut!
                        </p>
                        <div>
                            <Button type="success" className="mr-auto">
                                Join Now
                            </Button>
                        </div>
                    </div>
                    <div className="hidden md:block col-span-3 ml-auto mr-5">
                        <Image src="/images/svg/Doctor.svg" alt="Doctor" width={350} height={350}></Image>
                    </div>
                </div>
            </section>
            <section id="tabs" className="w-full items-center bg-teagreen">
                <div className="max-w-screen-xl mx-auto w-full py-5">
                    <Swiper wrapperClass="px-10 flex items-center" className="!w-100 " modules={[Pagination, Navigation]} spaceBetween={0} slidesPerView={5} navigation>
                        {categories.map((category, i) => (
                            <SwiperSlide key={i}>
                                <Button type="success" className="whitespace-nowrap">
                                    {category}
                                </Button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* <div className="flex justify-between items-center w-full gap-x-4">
                        <div className="">
                            <Button type="success" className="p-2 rounded-full">
                                <IconChevronLeft />
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-x-4 py-2 px-2 overflow-hidden items-center">
                            {categories.map((category, i) => (
                                <Button type="success" className="whitespace-nowrap" key={i}>
                                    {category}
                                </Button>
                            ))}
                        </div>
                        <div className="">
                            <Button type="success" className="p-2 rounded-full">
                                <IconChevronRight />
                            </Button>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
}
