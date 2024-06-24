"use client";

import React, { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import ReviewGrid from "./ReviewGrid";

const Reviews = () => {
	return (
		<MaxWidthWrapper className="relative max-w-5xl">
			<Image
				src={"/assets/what-people-are-buying.png"}
				className="absolute select-none hidden xl:block -left-32 top-1/3"
				aria-hidden="true"
				width={200}
				height={150}
				alt="Peoples"
			/>
			<ReviewGrid />
		</MaxWidthWrapper>
	);
};

export default Reviews;
