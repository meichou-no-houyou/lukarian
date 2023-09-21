declare module '*.mdx' {
    export const meta: {
        id: number;
        title: string;
        summary: string;
        category: string;
        created_at: string;
        author: {
            name: string;
            avatar: string;
        }
    }
}