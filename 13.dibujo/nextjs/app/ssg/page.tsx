import Layout from "@/components/layout";
import { Post, buscaPosts } from "@/lib/utils";
import { useEffect, useState } from "react";

export default async function SSG() {

    // Muy parecido a SSR
    const posts = await buscaPosts();

    return (
        <>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                SSG: Static Site Generation
            </h1>

            <p className="mt-5">{new Date().toLocaleString()}</p>

            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Posts
            </h2>

            <ol className="my-6 ml-6 list-disc [&>li]:mt-2">
                {posts.map(p => <li key={p.id}>{p.title}</li>)}
            </ol>
        </>
    );
}
