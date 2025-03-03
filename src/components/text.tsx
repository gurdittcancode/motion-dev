import { motion } from "motion/react";

export const CoolText = () => {
	const text = "See and use beautiful components like never before".split(" ");
	return (
		<div className="w-62 h-[20rem] p-4 flex flex-wrap text-pretty rounded-lg bg-pink-600 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
			{text.map((el, i) => (
				<motion.span
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
					}}
					transition={{
						duration: 0.2,
						delay: i / 9,
					}}
					key={i}
					className="text-white h-fit text-4xl font-extrabold"
				>
					{el}&nbsp;
				</motion.span>
			))}
		</div>
	);
};
