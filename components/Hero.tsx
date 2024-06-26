import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import UserList from "@/components/UserList";
import { userImages } from "@/types";
import Rating from "./Rating";
import Phone from "@/components/Phone";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Hero = () => {
	return (
		<section>
			<MaxWidthWrapper className="pb-24 pt-10 lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-20 xl:pt-24 lg:pb-32 lg:flex-row sm:flex">
				<div className="col-span-2 px-4 lg:px-0 lg:pt-2">
					<div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
						<div className="absolute w-28 left-0 -top-20 hidden lg:block">
							<Image
								src={"/assets/snake-1.png"}
								width={100}
								height={100}
								alt="snake"
								className="cursor-pointer"
							/>
						</div>
						<h1 className="relative w-fit tracking-tight text-balance mt-12 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
							Your Image on a{" "}
							<span className="bg-teal-400 text-white px-2 rounded-xl">
								Custom
							</span>{" "}
							Phone Case
						</h1>
						<p className="mt-6 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
							Capture your favorite memories with your own,{" "}
							<span className="font-semibold">one-of-one</span> phone case.
							CaseCobra allows you to protect your memories, not just your phone
							case.
						</p>
						<ul className="mt-6 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
							<div className="space-y-2">
								<li className="flex gap-1.5 items-center text-left">
									<Check className="h-5 w-5 shrink-0 text-teal-500" />
									High-quality, durable material
								</li>
								<li className="flex gap-1.5 items-center text-left">
									<Check className="h-5 w-5 shrink-0 text-teal-500" />5 year
									print guarantee
								</li>
								<li className="flex gap-1.5 items-center text-left">
									<Check className="h-5 w-5 shrink-0 text-teal-500" />
									Modern iPhone models supported
								</li>
							</div>
						</ul>
						<div className=" mt-6 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-5">
							<div className="flex -space-x-4">
								<UserList
									imageUrls={userImages}
									className="inline-block object-cover rounded-full ring-2 ring-slate-200"
								/>
							</div>
							<div className="flex flex-col justify-between items-center sm:items-start sm:mt-0 lg:mt-2 lg:items-start">
								<Rating rating={5} />
								<p className="mt-1">
									<span className="font-semibold">1.250</span> happy customers
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
					<div className="relative md:max-w-xl">
						<Image
							src={"/assets/your-image.png"}
							className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
							width={200}
							height={200}
							alt="Profile"
						/>
						<Image
							src={"/assets/line.png"}
							width={200}
							height={200}
							className="absolute w-20 -left-6 -bottom-6 select-none"
							alt="Line"
						/>
						<Phone imgSrc={"/assets/testimonials/1.jpg"} className="w-64" />
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default Hero;
