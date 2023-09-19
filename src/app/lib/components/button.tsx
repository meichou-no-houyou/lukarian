import { mc } from "@/app/lib/utils/MergeClass";
import { MouseEventHandler } from "react";

const colors = {
    warning: "bg-warning text-night focus:ring-warning",
    success: "bg-success text-white focus:ring-success",
    danger: "bg-danger text-white focus:ring-danger",
    info: "bg-info text-night focus:ring-info",
};

export default function Button({ children, type, className, onClick }: { children: React.ReactNode; type: keyof typeof colors; className?: string; onClick?: MouseEventHandler<HTMLButtonElement> }) {
    return (
        <button
            onClick={onClick}
            className={mc(`${colors[type]} rounded-[10px] font-bold text-md`, `hover:opacity-80 focus:ring-4 focus:ring-opacity-25 focus:outline-none`, "py-2 px-3 md:py-2.5 md:px-5", className)}
        >
            {children}
        </button>
    );
}
