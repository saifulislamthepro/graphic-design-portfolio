import Hero from "@/components/Hero";
import GraphicsGrid from "@/components/GraphicsGrid";
import MotionGrid from "@/components/MotionGrid";


export const metadata = {
title: "Saiful Islam – Graphic & Motion Designer",
description: "Graphic & Motion Designer portfolio showcasing graphics and motion works",
};


export default function Page() {
return (
<main>
<Hero />
<GraphicsGrid />
<MotionGrid />
</main>
);
}