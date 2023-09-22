import LukaBaret, { meta as LukaBaretMeta } from "./luka-lecet-karena-jatuh-atau-bergesekkan.mdx";
import LukaBakar, { meta as LukaBakarMeta } from "./luka-bakar-karena-petasan-memasak.mdx";
import LukaLecet, { meta as LukaLecetMeta } from "./luka-lecet-karena-jatuh-atau-bergesekkan.mdx";
import LukaSayat, { meta as LukaSayatMeta } from "./luka-sayat-karena-benda-tajam.mdx";
import LukaSengat, { meta as LukaSengatMeta } from "./luka-sengatan-lebah.mdx";

export const articles = [
    {
        ...LukaBaretMeta,
        content: <LukaBaret />,
    },
    {
        ...LukaBakarMeta,
        content: <LukaBakar />,
    },
    {
        ...LukaLecetMeta,
        content: <LukaLecet />,
    },
    {
        ...LukaSayatMeta,
        content: <LukaSayat />,
    },
    {
        ...LukaSengatMeta,
        content: <LukaSengat />,
    },
];
