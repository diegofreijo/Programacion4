export default interface CiudadProps {
    ciudad: Ciudad
}

function EmojiDeTemperatura(temperatura: number): string {
    if (temperatura < 0) {
        return "☃️";
    } else if (temperatura<=10) {
        return "🥶";
    } else if (temperatura <= 30) {
        return "😊";
    } else {
        return "🥵";
    }
}

export default function Ciudad(props: CiudadProps) {
    return (

        // <div className="min-h-screen flex items-center justify-center">
        //     <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
        //         <div className="font-bold text-xl">Sydney</div>
        //         <div className="text-sm text-gray-500">Thursday 10 May 2020</div>
        //         <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
        //             <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
        //         </div>
        //         <div className="flex flex-row items-center justify-center mt-6">
        //             <div className="font-medium text-6xl">24°</div>
        //             <div className="flex flex-col items-center ml-6">
        //                 <div>Cloudy</div>
        //                 <div className="mt-1">
        //                     <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
        //                     <span className="text-sm font-light text-gray-500">28°C</span>
        //                 </div>
        //                 <div>
        //                     <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
        //                     <span className="text-sm font-light text-gray-500">20°C</span>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="flex flex-row justify-between mt-6">
        //             <div className="flex flex-col items-center">
        //                 <div className="font-medium text-sm">Wind</div>
        //                 <div className="text-sm text-gray-500">9k/h</div>
        //             </div>
        //             <div className="flex flex-col items-center">
        //                 <div className="font-medium text-sm">Humidity</div>
        //                 <div className="text-sm text-gray-500">68%</div>
        //             </div>
        //             <div className="flex flex-col items-center">
        //                 <div className="font-medium text-sm">Visibility</div>
        //                 <div className="text-sm text-gray-500">10km</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        // <tr className="h-20">
        //     <td>
        //         <div className="flex items-center gap-3">
        //             <div className="avatar">
        //                 <div className="mask mask-squircle w-12 h-12">
        //                     <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className="3xl">{props.ciudad.nombre}</div>
        //                 {/* <div className="text-sm opacity-50">United States</div> */}
        //             </div>
        //         </div>
        //     </td>
        //     <td>{props.ciudad.temperatura}</td>
        //     <th>
        //         <button className="btn btn-ghost btn-xs">X</button>
        //     </th>
        // </tr>

        // <div className="card w-96 bg-base-100 shadow-xl image-full">
        //     <figure>
        //         <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{props.ciudad.nombre}</h2>
        //         <p>Esta fresco para chomba</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-danger">X</button>
        //         </div>
        //     </div>
        // </div>

        <div className="w-96 bg-neutral shadow-xl">
            <div className="flex justify-between">
                <h3 className="font-bold text-2xl m-4">{props.ciudad.nombre}</h3>
                <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </div>
            <p className="mb-10 text-5xl center text-center">{props.ciudad.temperatura}° {EmojiDeTemperatura(props.ciudad.temperatura)}</p>
        </div>

        // <div className="card w-96 bg-base-100 shadow-xl image-full">
        //     <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Shoes!</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>


        // <div className="card bg-base-100 shadow-xl">
        //     <figure>
        //         <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title 3xl">
        //             {props.ciudad.nombre}
        //         </h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div className="card-actions justify-end">
        //             <div className="badge badge-outline">Fashion</div>
        //             <div className="badge badge-outline">Products</div>
        //         </div>
        //     </div>
        // </div>
    )
}