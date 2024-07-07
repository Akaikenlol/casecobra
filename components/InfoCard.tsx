import { DesignPreviewProps } from "@/constants";
import { formatPrice } from "@/lib/formatPrice";
import { BASE_PRICE, materialInfo, PRODUCT_PRICES, qualityInfo } from "@/types";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const InfoCard = ({ configuration }: DesignPreviewProps) => {
	const { color, model, finish, material } = configuration;

	let totalPrice = BASE_PRICE;
	if (material === "polycarbonate") {
		totalPrice += PRODUCT_PRICES.material.polycarbonate;
	}
	if (finish === "textured") {
		totalPrice += PRODUCT_PRICES.finish.textured;
	}
	return (
		<div className=" sm:col-span-12 md:col-span-9 text-base">
			<div className="grid grid-cols-1 gap-y-8 border-b border-gray-300 py-8 sm:grid-cols-2 sm: gap-x-6 sm:py-6 md:py-10">
				<div>
					<p className="font-medium text-zinc-950">Highlights</p>
					<ol className="mt-3 text-zinc-700 list-disc list-inside">
						{qualityInfo.map((info) => (
							<li>{info}</li>
						))}
					</ol>
				</div>
				<div>
					<p className="font-medium text-zinc-950">Materials</p>
					<ol className="mt-3 text-zinc-700 list-disc list-inside">
						{materialInfo.map((info) => (
							<li>{info}</li>
						))}
					</ol>
				</div>
			</div>

			<div className="mt-8">
				<div className="bg-gray-100 p-6 sm:rounded-lg sm:p-8">
					<div className=" flow-root text-sm">
						<div className=" flex items-center justify-between py-1 mt-2">
							<p className="text-gray-600">Base Price</p>
							<p className=" font-medium text-gray-900">
								{formatPrice(BASE_PRICE / 100)}
							</p>
						</div>

						{finish === "textured" ? (
							<div className="flex items-center justify-between py-1 mt-2">
								<p className="text-gray-600">Texture Finish</p>
								<p className=" font-medium text-gray-900">
									{formatPrice(PRODUCT_PRICES.finish.textured / 100)}
								</p>
							</div>
						) : null}

						{material === "polycarbonate" ? (
							<div className="flex items-center justify-between py-1 mt-2">
								<p className="text-gray-600">Soft Polycarbonate Material</p>
								<p className=" font-medium text-gray-900">
									{formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}
								</p>
							</div>
						) : null}

						<div className="my-2 h-px bg-gray-200" />
						<div className="flex items-center justify-between py-2">
							<p className="font-semibold text-gray-900">Order Total</p>
							<p className="font-semibold text-gray-900">
								{formatPrice(totalPrice / 100)}
							</p>
						</div>
					</div>
				</div>
				<div className="mt-8 flex justify-end pb-12">
					<Button
						// isLoading={true}
						// disabled={true}
						// loadingText="Loading"
						className="px-4 sm:px-6 lg:px-8"
					>
						Check out <ArrowRight className="h-4 w-4 ml-1.5 inline" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
