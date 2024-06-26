"use client";

import { DesignConfiguratorProps } from "@/constants";
import React, { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Rnd } from "react-rnd";
import HandleComponent from "./HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup } from "@headlessui/react";
import { COLORS, FINISHES, MATERIAL, MODELS } from "@/types";
import { Label } from "./ui/label";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { DropdownMenuRadioGroup } from "@radix-ui/react-dropdown-menu";
import { Check, ChevronsUpDown, Radio } from "lucide-react";

const DesignConfigurator = ({
	configId,
	imageUrl,
	imageDimension,
}: DesignConfiguratorProps) => {
	const [options, setOptions] = useState<{
		color: (typeof COLORS)[number];
		model: (typeof MODELS.options)[number];
		material: (typeof MATERIAL.options)[number];
		finish: (typeof FINISHES.options)[number];
	}>({
		color: COLORS[0],
		model: MODELS.options[5],
		material: MATERIAL.options[0],
		finish: FINISHES.options[0],
	});

	return (
		<div className="relative mt-20 grid grid-cols-3 mb-20 pb-20">
			<div className="relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
				<div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
					<AspectRatio
						ratio={896 / 1831}
						className="pointer-events-none relative z-50 aspect-[896/1831] w-full"
					>
						<Image
							src={"/assets/phone-template.png"}
							width={imageDimension.width}
							height={imageDimension.height}
							alt="phone image"
							className="pointer-events-none z-50 select-none"
						/>
					</AspectRatio>
					<div className="absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
					<div
						className={cn(
							"absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]"
						)}
						style={{ backgroundColor: options.color.value }}
					/>
				</div>
				<Rnd
					default={{
						x: 150,
						y: 205,
						height: imageDimension.height / 4,
						width: imageDimension.width / 4,
					}}
					lockAspectRatio
					className="absolute z-20 border-[3px] border-teal-500"
					resizeHandleComponent={{
						topLeft: <HandleComponent />,
						topRight: <HandleComponent />,
						bottomLeft: <HandleComponent />,
						bottomRight: <HandleComponent />,
					}}
				>
					<div className="relative w-full h-full">
						<Image
							src={imageUrl}
							width={imageDimension.width}
							height={imageDimension.height}
							className="pointer-events-none"
							alt="upload image"
						/>
					</div>
				</Rnd>
			</div>
			<div className="h-[37.5rem] flex flex-col bg-white">
				<ScrollArea className="relative flex-1 overflow-auto">
					<div
						aria-hidden="true"
						className="absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none"
					/>
					<div className="px-8 pb-12 pt-8">
						<h2 className="tracking-tight font-bold text-3xl">
							Customize your case
						</h2>
						<div className="w-full h-px bg-zinc-200 my-6" />

						<div className="relative mt-4 h-full flex flex-col justify-between">
							<div className="flex flex-col gap-6">
								<RadioGroup
									value={options.color}
									onChange={(val) => {
										setOptions((prev) => ({
											...prev,
											color: val,
										}));
									}}
								>
									<Label>Color: {options.color.label}</Label>
									<div className="mt-3 flex items-center space-x-3">
										{COLORS.map((color) => (
											<RadioGroup.Option
												key={color.label}
												value={color}
												style={{ borderColor: color.value }}
												className={({ active, checked }) =>
													cn(
														"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-1 active:ring-1 focus:ring-1 active:outline-none focus:outline-none border-1 border-transparent",
														{
															border: active || checked,
														}
													)
												}
											>
												<span
													style={{
														backgroundColor: color.value,
													}}
													className="h-8 w-8 rounded-full border border-black border-opacity-10"
												/>
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
								<div className="relative flex flex-col gap-3 w-full">
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button
												variant={"outline"}
												role="combobox"
												className="w-full justify-between"
											>
												{options.model.label}
												<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											{MODELS.options.map((model) => (
												<DropdownMenuItem
													key={model.label}
													className={cn(
														"flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100",
														{
															"bg-zinc-100":
																model.label === options.model.label,
														}
													)}
													onClick={() =>
														setOptions((prev) => ({ ...prev, model }))
													}
												>
													{model.label}
													<Check
														className={cn(
															"ml-4 h-4 w-4",
															model.label === options.model.label
																? "opacity-100"
																: "opacity-0"
														)}
													/>
												</DropdownMenuItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
								{[MATERIAL, FINISHES].map(
									({ name, options: selectableOptions }) => (
										<RadioGroup
											key={name}
											value={options[name]}
											onChange={(val) => {
												setOptions((prev) => ({
													...prev,
													[name]: val,
												}));
											}}
										>
											<Label>
												{name.slice(0, 1).toUpperCase() + name.slice(1)}
											</Label>
											<div className="mt-3 space-y-4">
												{selectableOptions.map((option) => (
													<RadioGroup.Option
														key={option.value}
														value={option}
														className={({ active, checked }) =>
															cn(
																"relative block cursor-pointer rounded-lg bg-white px-6 py-4 shadow-sm border-2 border-zinc-200 focus:outline-none ring-0 focus:ring-0 outline-none sm:flex sm:justify-between",
																{
																	"border-primary": active || checked,
																}
															)
														}
													>
														<span className="flex items-center">
															<span className="flex flex-col text-sm">
																<RadioGroup.Label
																	as="span"
																	className={"font-medium text-gray-900"}
																>
																	{option.label}
																</RadioGroup.Label>

																{option.description ? (
																	<RadioGroup.Description
																		as={"span"}
																		className={"text-gray-500"}
																	>
																		<span className="block sm:inline">
																			{option.description}
																		</span>
																	</RadioGroup.Description>
																) : null}
															</span>
														</span>
													</RadioGroup.Option>
												))}
											</div>
										</RadioGroup>
									)
								)}
							</div>
						</div>
					</div>
				</ScrollArea>
			</div>
		</div>
	);
};

export default DesignConfigurator;
