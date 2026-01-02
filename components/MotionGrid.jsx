// ================= components/MotionGrid.jsx =================
"use client";


import { useState } from "react";
import useReveal from "@/hooks/useReveal";


const motions = [
{ video: "/motion/m-2.mp4", poster: "/motion/s-2.jpg" },
{ video: "/motion/m-3.mp4", poster: "/motion/s-3.jpg" },
{ video: "/motion/m-4.mp4", poster: "/motion/s-4.jpg" },
{ video: "/motion/m-5.mp4", poster: "/motion/s-5.jpg" },
{ video: "/motion/m-6.mp4", poster: "/motion/s-6.jpg" },
{ video: "/motion/m-7.mp4", poster: "/motion/s-7.jpg" },
{ video: "/motion/m-8.mp4", poster: "/motion/s-8.jpg" },
{ video: "/motion/m-9.mp4", poster: "/motion/s-9.jpg" },
{ video: "/motion/m-10.mp4", poster: "/motion/s-10.jpg" },
{ video: "/motion/m-1.mp4", poster: "/motion/s-1.jpg" },
];


export default function MotionGrid() {
const [video, setVideo] = useState(null);



return(
<section>
<h2>Motion Graphics</h2>
<div className="grid">
{motions.map((item, i) => {
const [ref, visible] = useReveal();
return (
<div
key={i}
ref={ref}
className={`card motion-thumb ${visible ? "visible" : ""}`}
style={{ backgroundImage: `url(${item.poster})`, backgroundSize: "cover" }}
onClick={() => setVideo(item.video)}
>
▶
</div>
);
})}
</div>


{video && (
<div className="modal" onClick={() => setVideo(null)}>
<video src={video} controls autoPlay className="modal-content" />
</div>
)}
</section>
)
}