import { ReviewProps } from "@/constants";
import { cn } from "@/lib/utils";
import { POSSIBLE_ANIMATION_DELAYS } from "@/types";
import React from "react";

const Review = ({ imgSrc, className, ...props }: ReviewProps) => {
	const animationDelay =
		POSSIBLE_ANIMATION_DELAYS[
			Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
		];

	return (
		<div
			className={cn(
				"animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
				className
			)}
			style={{ animationDelay }}
			{...props}
		></div>
	);
};

export default Review;
