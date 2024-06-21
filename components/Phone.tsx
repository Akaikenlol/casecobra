import { PhoneProps } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
	return (
		<div
			className={cn(
				"relative pointer-events-none z-50 overflow-hidden",
				className
			)}
			{...props}
		>
			<Image
				alt="phone"
				src={
					dark
						? "/assets/phone-template-dark-edges.png"
						: "/assets/phone-template-white-edges.png"
				}
				width={900}
				height={1850}
				className="pointer-events-none -z-10 inset-0"
			/>
			<div className="absolute -z-10 inset-0">
				<Image
					src={imgSrc}
					className="object-cover"
					width={900}
					height={1850}
					alt="overlaying phone image"
				/>
			</div>
		</div>
	);
};

export default Phone;
