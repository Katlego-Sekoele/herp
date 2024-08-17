"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

/**
 * ScrollToTopButton Component
 *
 * A button that appears when the user scrolls down the page and allows them to
 * smoothly scroll back to the top when clicked.
 *
 * Created with assistance from Claude, an AI assistant by Anthropic.
 * https://www.anthropic.com
 */

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{isVisible && (
				<Button
					className="fixed bottom-8 right-8 p-3"
					onClick={scrollToTop}
					aria-label="Scroll to top"
				>
					<ChevronUp className="h-4 w-4" />
				</Button>
			)}
		</>
	);
};

export default ScrollToTopButton;
