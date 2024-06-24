import React from "react";
import Image from "next/image";
import { Icons } from "@/components/Icons";
import UserReviews from "@/components/UserReviews";
import Reviews from "@/components/Reviews";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Animated = () => {
	return (
		<section className="bg-slate-100 py-24">
			<MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
				<div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
					<h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
						What our{" "}
						<span className="relative px-2">
							customers
							<Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-teal-500" />
						</span>{" "}
						say
					</h2>
					<Image
						src={"/assets/snake-2.png"}
						alt="snake"
						className="order-0 lg:order-2"
						width={100}
						height={100}
					/>
				</div>
				<div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
					<UserReviews
						imageUrl={"/assets/users/user-1.png"}
						className={"rounded-full object-cover"}
						user="Jonathan"
						reviewText="The case feels great in my hand and"
						highlightText="the print quality is amazing."
						restText="I'm very happy with my purchase."
					/>
					<UserReviews
						imageUrl={"/assets/users/user-2.png"}
						className={"rounded-full object-cover"}
						user="Sarah"
						reviewText="I love my new case!"
						restText="and the print quality is amazing."
						highlightText="The case feels great in my hand, "
					/>
				</div>
			</MaxWidthWrapper>
			<div className="pt-16">
				<Reviews />
			</div>
		</section>
	);
};

export default Animated;
