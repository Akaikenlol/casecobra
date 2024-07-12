import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Phone from "./Phone";
import { qualityInfo } from "@/types";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const CreateCase = () => {
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
				<ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit flex flex-col">
					{qualityInfo.map((info, index) => (
						<li key={index} className="flex items-center space-x-2">
							<Check className="w-6 h-6 text-teal-500" />
							<span>{info}</span>
						</li>
					))}
					<div className="flex justify-center">
						<Link
							href={"/configure/upload"}
							className={buttonVariants({
								size: "lg",
								className: "mx-auto mt-8",
							})}
						>
							Create your own case now <ArrowRight className="h-4 w-4 ml-1.5" />
						</Link>
					</div>
				</ul>
			</MaxWidthWrapper>
		</section>
	);
};

export default CreateCase;
