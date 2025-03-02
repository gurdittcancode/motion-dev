import { motion } from "motion/react";

export const Button = () => {
	return (
		<motion.button
			whileHover={{
				rotateX: 25,
				rotateY: 10,
				boxShadow: "0px 20px 30px rgba(61,27,76,0.7)",
				y: -5
			}}
			whileTap={{
				y: 0
			}}
			style={{
				translateZ: 100,
			}}
			transition={{
				duration: 0.3,
				ease: "easeInOut",
			}}
			className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rbga(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
		>
			<span className="group-hover:text-purple-600 transition-colors duration-300">
				Button
			</span>
			<span className="absolute w-3/4 inset-x-0 mx-auto bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent h-px"></span>
			<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 mx-auto bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent h-[4px] blur-sm"></span>
		</motion.button>
	);
};
