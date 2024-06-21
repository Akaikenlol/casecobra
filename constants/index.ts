import { HTMLAttributes } from "react";

export interface MaxWidthWrapperProps {
	className?: string;
	children: React.ReactNode;
}

export interface UserListProps {
	imageUrls: string[];
	className?: string;
}

export interface RatingProps {
	rating: number;
}

export interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: string;
	className?: string;
	dark?: boolean;
}
