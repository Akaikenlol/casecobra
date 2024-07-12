import { UserListProps } from "@/constants";
import Image from "next/image";
import React from "react";

const UserList: React.FC<UserListProps> = ({
	imageUrls,
	className,
}: UserListProps) => {
	return (
		<div className="flex -space-x-4">
			{imageUrls.map((url, index) => (
				<Image
					key={index}
					src={url}
					width={50}
					height={50}
					className={className}
					alt={`user profile ${index + 1}`}
				/>
			))}
		</div>
	);
};

export default UserList;
