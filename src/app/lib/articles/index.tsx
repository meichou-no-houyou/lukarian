import LukaBaret, { meta as LukaBaretMeta } from "./luka-baret-karena-jatuh-atau-bergesekkan.mdx";
import LukaBakar, { meta as LukaBakarMeta } from "./luka-bakar-karena-petasan-memasak.mdx";

export const articles = [
    {
        ...LukaBaretMeta,
        content: <LukaBaret />,
    },
    {
        ...LukaBakarMeta,
        content: <LukaBakar />,
    },
];
