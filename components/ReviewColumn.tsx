"use client";

import { ReviewColumnProps } from "@/constants";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import Review from "./Review";

const ReviewColumn = ({
	reviews,
	className,
	reviewClassName,
	msPerPixel,
}: ReviewColumnProps) => {
	const columnRef = useRef<HTMLDivElement | null>(null);
	const [columnHeight, setColumnHeight] = useState(0);
	const duration = `${columnHeight * (msPerPixel ?? 0)}ms`;

	useEffect(() => {
		if (!columnRef.current) return;

		const resizeObserver = new window.ResizeObserver(() => {
			setColumnHeight(columnRef.current?.clientHeight ?? 0);
		});

		resizeObserver.observe(columnRef.current);

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<div
			ref={columnRef}
			className={cn("animate-marquee space-y-8 py-4", className)}
			style={{ "--marquee-duration": duration } as React.CSSProperties}
		>
			{reviews.concat(reviews).map((imgSrc, reviewIndex) => (
				<Review imgSrc={""} />
			))}
		</div>
	);
};

export default ReviewColumn;
