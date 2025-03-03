import {
	CalendarDays,
	Clock,
	CuboidIcon,
	MessageSquareIcon,
	XIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const Card = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<AnimatePresence>
				{/* needs to be directly above the conditionally rendered element */}
				{open && (
					<motion.div
						initial={{
							opacity: 0,
							scale: 0.98,
							filter: "blur(10px)",
						}}
						animate={{
							opacity: 1,
							scale: 1,
							filter: "blur(0px)",
						}}
						exit={{
							opacity: 0,
							scale: 0.98,
							filter: "blur(10px)",
						}}
						transition={{
							duration: 0.3,
							ease: "easeInOut",
						}}
						className="w-64 min-h-[25rem] h-[25rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6 flex flex-col bg-white"
					>
						<h2 className="font-bold text-[10px]">gurditt&apos;s components</h2>
						<p className="text-neutral-700 mt-2 text-[10px]">
							a collection of beautiful UI components, let&apos;s get on with
							it!
						</p>
						<div className="flex items-center justify-center">
							<button
								onClick={() => setOpen(false)}
								className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1"
							>
								<span className="size-4  text-purple-500">G</span> gurditt
								<XIcon className="size-3 text-neutral-400" />
							</button>
						</div>
						<div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.98,
									filter: "blur(10px)",
								}}
								whileHover={{
									opacity: 1,
									scale: 1.05,
									filter: "blur(0px)",
								}}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
								}}
								className="absolute border border-neutral-200 inset-0 size-full rounded-lg bg-white divide-y divide-neutral-200"
							>
								<div className="flex gap-2 p-4">
									<div className="size-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
										<MessageSquareIcon className="size-4 text-neutral-600" />
									</div>
									<div className="flex flex-col">
										<p className="text-[8px] font-bold text-neutral-600">
											gurditt ui components
										</p>
										<p className="text-neutral-400 text-[8px] mt-1">
											a collection of ui components
										</p>
									</div>
								</div>
								<div className="flex gap-2 p-4">
									<div className="size-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
										<Clock className="size-4 text-neutral-600" />
									</div>
									<div className="flex flex-col">
										<p className="text-[8px] font-bold text-neutral-600">
											24 hours turnaround time
										</p>
										<p className="text-neutral-400 text-[8px] mt-1">
											super fast delivery at warp speed
										</p>
									</div>
								</div>

								<div className="flex gap-2 p-4">
									<div className="size-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
										<CalendarDays className="size-4 text-neutral-600" />
									</div>
									<div className="flex flex-col">
										<p className="text-[8px] font-bold text-neutral-600">
											360 days all around
										</p>
										<p className="text-neutral-400 text-[8px] mt-1">
											we're here to help to you 24/7.
										</p>
									</div>
								</div>
								<div className="flex gap-2 p-4">
									<div className="size-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
										<CuboidIcon className="size-4 text-neutral-600" />
									</div>
									<div className="flex flex-col">
										<p className="text-[8px] font-bold text-neutral-600">
											360 days all around
										</p>
										<p className="text-neutral-400 text-[8px] mt-1">
											we're here to help to you 24/7.
										</p>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
