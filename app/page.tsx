import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Rating from "@/components/Rating";
import { Check } from "lucide-react";
import Image from "next/image";
import UserList from "@/components/UserList";

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
				<MaxWidthWrapper className="pb-24 pt-10 lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
					<div className="col-span-2 px-6 lg:px-0 lg:pt-4">
						<div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
							<div className="absolute w-28 left-0 top-0 hidden lg:block">
								<Image
									src={"/assets/snake-1.png"}
									width={24}
									height={24}
									alt="snake"
									className="cursor-pointer"
								/>
							</div>
							<h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
								Your Image on a{" "}
								<span className="bg-teal-400 text-white px-2 rounded-xl">
									Custom
								</span>{" "}
								Phone Case
							</h1>
							<p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
								Capture your favorite memories with your own,{" "}
								<span className="font-semibold">one-of-one</span> phone case.
								CaseCobra allows you to protect your memories, not just your
								phone case.
							</p>
							<ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
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
							<div className=" mt-10 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-5">
								<div className="flex -space-x-4">
									<UserList
										imageUrls={userImages}
										className="inline-block object-cover rounded-full ring-2 ring-slate-200"
									/>
								</div>
								<div className="flex flex-col justify-between items-center sm:items-start sm:mt-0 lg:mt-5 lg:items-start">
									<Rating rating={5} />
								</div>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
		</div>
	);
}
