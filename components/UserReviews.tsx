import React from "react";
import Image from "next/image";
import Rating from "./Rating";
import { Check } from "lucide-react";
import { UserListProps } from "@/constants";

interface UserReviewsProps {
	imageUrl: string;
	className: string;
	user: string;
	reviewText: string;
	highlightText: string;
	restText: string;
}

const UserReviews = ({
	imageUrl,
	className,
	user,
	reviewText,
	highlightText,
	restText,
}: UserReviewsProps) => {
	return (
		<div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
			<Rating rating={5} />
			<div className="text-lg leading-8">
				<p>
					{reviewText}{" "}
					<span className="p-0.5 bg-teal-300"> {highlightText}</span> {restText}
				</p>
			</div>
			<div className="flex gap-4 mt-2 items-center text-center">
				<Image
					src={imageUrl}
					alt="user"
					className={className}
					width={50}
					height={50}
				/>
				<div className="flex flex-col">
					<div className="flex items-center gap-2">
						<p className="font-semibold">{user}</p>
						<Check className="h-4 w-4 stroke-[3px] text-teal-500" />
					</div>
					<div className="flex gap-1.5 items-center text-zinc-600">
						<p className="text-sm">Verified Purchase</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserReviews;
