"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { PHONES } from "@/types";
import { splitArray } from "@/lib/splitArray";
import ReviewColumn from "./ReviewColumn";

const ReviewGrid = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(containerRef, { once: true, amount: 0.4 });
	const columns = splitArray(PHONES, 3);
	const column1 = columns[0];
	const column2 = columns[1];
	const column3 = splitArray(columns[2], 2);

	return (
		<div
			ref={containerRef}
			className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
		>
			{isInView ? <ReviewColumn reviews={[]} /> : null}
		</div>
	);
};

export default ReviewGrid;
