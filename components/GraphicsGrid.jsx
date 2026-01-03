// ================= components/GraphicsGrid.jsx =================
"use client";


import { useState } from "react";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";


const graphics = [
"/graphics/1.png",
"/graphics/2.jpg",
"/graphics/3.jpg",
"/graphics/4.jpg",
"/graphics/5.jpg",
"/graphics/6.png",
"/graphics/7.jpg",
"/graphics/8.jpg",
"/graphics/9.jpg",
"/graphics/10.png",
];


export default function GraphicsGrid() {
const [modal, setModal] = useState(null);


return (
<section>
<h2>Graphic Design</h2>
<div className="grid">
{graphics.map((img, i) => {
const [ref, visible] = useReveal();
return (
<div
key={i}
ref={ref}
className={`card ${visible ? "visible" : ""}`}
onClick={() => setModal(img)}
>
<Image src={img} alt="Graphic work" width={600} height={600} loading="lazy" />
</div>
);
})}
</div>

{modal && (
<div className="modal graphics" onClick={() => setModal(null)}>
<Image src={modal} alt="Preview" width={1200} height={800} className="modal-content" />
</div>
)}
</section>
);
}