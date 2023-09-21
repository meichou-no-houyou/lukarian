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
        };
        is_verified: boolean;
        like: number;
        view: number;
        trust_score: number;
        verified_by?: {
            name: string;
            avatar: string;
            verified_at: string;
        }
    }
}