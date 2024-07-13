"use client";

import { CaseColor } from "@prisma/client";
import React, { useRef, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

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
	return (
		<AspectRatio ref={ref} ratio={8000 / 2001} className="relative">
			<div
				className="absolute z-20 scale-[1.0352]"
				style={{
					left:
						renderDimensions.width / 2 - renderDimensions.width / (1216 / 121),
					top: renderDimensions.height / 6.22,
				}}
			>
				{/* <Image width={renderDimensions.width / (3000 / 637)} className='phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]'/> */}
			</div>
		</AspectRatio>
	);
};

export default PhonePreview;
