import { RatingProps } from "@/constants";
import { Star } from "lucide-react";
import React from "react";

const Rating = ({ rating }: RatingProps) => {
	return (
		<div className="flex gap-0.5">
			{[...Array(5)].map((_, index) => (
				<Star
					key={index}
					className={`h-4 w-4 ${index < rating ? "text-teal-500 fill-teal-500" : "text-gray-300"}`}
				/>
			))}
		</div>
	);
};

export default Rating;
