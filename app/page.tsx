import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Rating from "@/components/Rating";
import { Check } from "lucide-react";
import Image from "next/image";
import UserList from "@/components/UserList";
import Phone from "@/components/Phone";
import { Icons } from "@/components/Icons";
import UserReviews from "@/components/UserReviews";

export default function Home() {
	const userImages = [
		"/assets/users/user-1.png",
		"/assets/users/user-2.png",
		"/assets/users/user-3.png",
		"/assets/users/user-4.jpg",
	];
	return (
		<div className="bg-slate-50">
			<section>
				<MaxWidthWrapper className="pb-24 pt-10 lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-20 xl:pt-24 lg:pb-52 lg:flex-row sm:flex">
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
								CaseCobra allows you to protect your memories, not just your
								phone case.
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
							<Phone imgSrc={"/assets/1.jpg"} className="w-64" />
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
			{/* value proposition section */}
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
							alt="sneky"
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
							restText="and the print quality is amazing"
							highlightText="The case feels great in my hand, "
						/>
					</div>
				</MaxWidthWrapper>
			</section>
		</div>
	);
}
