import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ClassValue } from "clsx";

export const mc = (...classes: ClassValue[]) => twMerge(clsx(...classes));
