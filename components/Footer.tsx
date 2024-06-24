import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import Image from "next/image";
import Phone from "./Phone";

const Footer = () => {
	return (
		<section>
			<MaxWidthWrapper className="py-24">
				<div className="mb-12 px-6 lg:px-8">
					<div className="mx-auto max-w-2xl sm:text-center">
						<h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
							Upload your photo and get{" "}
							<span className="relative py-0.5 px-2 bg-teal-400 text-white rounded-xl">
								your own case
							</span>{" "}
							now
						</h2>
					</div>
				</div>
				<div className="mx-auto max-w-6xl px-6 lg:px-8">
					<div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
						<img
							src="/assets/arrow.png"
							className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
						/>

						<div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
							<img
								src="/assets/horse.jpg"
								className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
							/>
						</div>
						<Phone imgSrc="/assets/horse_phone.jpg" className="w-60" />
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default Footer;
