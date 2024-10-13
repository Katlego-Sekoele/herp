"use client";

import { motion } from "framer-motion";

export function LoadingIndicatorComponent() {
	return (
		<div className="flex items-center justify-center w-full h-screen bg-secondary-100">
			<div className="flex space-x-2">
				{[0, 1, 2].map((index) => (
					<motion.span
						key={index}
						className="w-4 h-4 rounded-full bg-red-600"
						animate={{
							scale: [1, 1.2, 1],
							opacity: [1, 0.6, 1],
						}}
						transition={{
							duration: 1,
							repeat: Infinity,
							delay: index * 0.2,
						}}
					/>
				))}
			</div>
		</div>
	);
}
