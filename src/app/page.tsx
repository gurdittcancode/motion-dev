"use client";

import { Button } from "@/components/button";

export default function Home() {
	return (
		<div
			className="perspective-[1000px] transform-3d h-screen w-full bg-neutral-900 flex items-center justify-center"
			style={{
				backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.1) 0.5px, transparent 0)`,
				backgroundSize: "8px 8px",
				backgroundRepeat: "repeat",
			}}
		>
			<Button />
		</div>
	);
}
