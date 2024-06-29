import DesignConfigurator from "@/components/DesignConfigurator";
import { searchParamsProps } from "@/constants";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

const Page = async ({ searchParams }: searchParamsProps) => {
	const { id } = searchParams;

	if (!id || typeof id !== "string") {
		return notFound();
	}

	const configuration = await db.configuration.findUnique({
		where: { id },
	});

	if (!configuration) {
		return notFound();
	}

	const { imageUrl, height, width } = configuration;

	return (
		<DesignConfigurator
			configId={configuration.id}
			imageUrl={imageUrl}
			imageDimension={{
				width,
				height,
			}}
		/>
	);
};

export default Page;
