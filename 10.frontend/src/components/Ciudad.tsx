// Ciudad.tsx
export default interface CiudadProps {
    ciudad: Ciudad
}

function EmojiDeTemperatura(temperatura: number): string {
    if (temperatura < 0)
        return "☃️";
    else if (temperatura <= 15)
        return "🥶";
    else if (temperatura <= 30)
        return "😊";
    else
        return "🥵";
}

export default function Ciudad(props: CiudadProps) {
    return (
        <div className="bg-neutral shadow-xl">
            <div className="flex justify-between">
                <h3 className="font-bold text-2xl m-4">{props.ciudad.nombre}</h3>
                <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </div>
            <p className="mb-10 text-5xl center text-center">{props.ciudad.temperatura}° {EmojiDeTemperatura(props.ciudad.temperatura)}</p>
        </div>
    )
}