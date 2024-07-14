"use client";

import { CaseColor } from "@prisma/client";
import React, { useEffect, useRef, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PhonePreview = ({
	croppedImageUrl,
	color,
}: {
	croppedImageUrl: string;
	color: CaseColor;
}) => {
	const ref = useRef<HTMLDivElement>(null);

	const [renderDimensions, setRenderDimensions] = useState({
		height: 0,
		width: 0,
	});

	const handleResize = () => {
		if (!ref.current) return;
		const { width, height } = ref.current.getBoundingClientRect();
		setRenderDimensions({ width, height });
	};

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [ref.current]);

	let caseBackgroundColor = "bg-zinc-950";
	if (color === "blue") caseBackgroundColor = "bg-blue-950";
	if (color === "red") caseBackgroundColor = "bg-rose-950";
	if (color === "white") caseBackgroundColor = "bg-zinc-300";

	return (
		<AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
			<div
				className="absolute z-20 scale-[1.0352]"
				style={{
					left:
						renderDimensions.width / 2 - renderDimensions.width / (1216 / 121),
					top: renderDimensions.height / 6.22,
				}}
			>
				<Image
					width={renderDimensions.width / (3000 / 637)}
					height={renderDimensions.height / 2001}
					alt="Phone Image"
					className={cn(
						"phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]",
						caseBackgroundColor
					)}
					src={croppedImageUrl}
				/>
			</div>

			<div className=" relative h-full w-full z-40">
				<Image
					src={"/assets/clearphone.png"}
					fill
					alt="phone"
					className="pointer-events-none w-full h-full antialiased rounded-md"
				/>
			</div>
		</AspectRatio>
	);
};

export default PhonePreview;
