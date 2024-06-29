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

export interface ReviewColumnProps {
	reviews: string[];
	className?: string;
	reviewClassName?: (reviewIndex: number) => string;
	msPerPixel?: number;
}

export interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: string;
}

export interface searchParamsProps {
	[key: string]: string | string[] | undefined;
}

export interface DesignConfiguratorProps {
	configId: string;
	imageUrl: string;
	imageDimension: { width: number; height: number };
}
