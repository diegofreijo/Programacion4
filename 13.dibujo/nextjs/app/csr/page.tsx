// Si quiero que se ejecute en el cliente tengo que aclararlo con este string magico
"use client"

import { Post, buscaPosts, numeroParaLaQuiniela } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CSR() {
    // Esto ya no anda en el cliente porque no puedo usar async 🫠
    // const posts = await buscaPosts();

    const searchParams = useSearchParams();
    const nombre = searchParams.get("nombre");

    // La danza de useState de siempre
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        console.log("Dibujando pagina en CSR con nombre:", nombre);
        buscaPosts().then(setPosts);
    }, [nombre]);

    // Con esto puedo evaluar si estoy en el cliente o no para ver cuando dibujar la fecha
    const [isClient, setIsClient] = useState(false)
    useEffect(() => { setIsClient(true) }, [])

    return (
        <>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                CSR: Client Side Rendering
            </h1>

            <p className="mt-5">Hola {isClient ? nombre : "(aca va a ir el nombre)"}</p>

            <p className="mt-5">{isClient ? new Date().toLocaleString() : "(aca va a ir la fecha)"}</p>

            <p className="mt-5">Jugale al {isClient ? numeroParaLaQuiniela() : -1}</p>

            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Posts
            </h2>

            <ol className="my-6 ml-6 list-disc [&>li]:mt-2">
                {posts.map(p => <li key={p.id}>{p.title}</li>)}
            </ol>
        </>
    );
}
