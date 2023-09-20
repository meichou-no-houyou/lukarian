import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Button from "./button";
import { useEffect, useState } from "react";

function Carousel({ items }: { items: React.ReactNode[] }) {
    const [activePageIndex, setActivePageIndex] = useState(0);
    const totalPages = items.length;

    const prevPage = () => {
        const newIndex = activePageIndex - 1;
        setActivePageIndex(newIndex < 0 ? totalPages - 1 : newIndex);
    };

    const nextPage = () => {
        const newIndex = activePageIndex + 1;
        setActivePageIndex(newIndex % totalPages);
    };

    return (
        <>
            <div className="container max-w-screen-md w-full mx-auto flex gap-x-2 items-center">
                <Button onClick={prevPage} type="success" className="z-30 flex items-center justify-center h-full rounded-full p-2 md:p-2 cursor-pointer group focus:outline-none">
                    <IconChevronLeft />
                </Button>

                <div className="relative flex items-center w-full h-auto overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            width: `${100 * totalPages}%`,
                            transform: `translateX(-${activePageIndex * 100}%)`,
                        }}
                    >
                        {items.map((item, index) => (
                            <div key={index} className="flex-none w-72">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <Button onClick={nextPage} type="success" className="z-30 flex items-center justify-center h-full rounded-full p-2 md:p-2 cursor-pointer group focus:outline-none">
                    <IconChevronRight />
                </Button>
            </div>
        </>
    );
}

export default Carousel;
