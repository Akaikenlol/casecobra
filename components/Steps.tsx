import { cn } from "@/lib/utils";
import { STEPS } from "@/types";
import { usePathname } from "next/navigation";
import React from "react";

const Steps = () => {
	const pathname = usePathname();
	return (
		<ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
			{STEPS.map((step, i) => {
				const isCurrent = pathname.endsWith(step.url);
				const isCompleted = STEPS.slice(i + 1).some((step) =>
					pathname.endsWith(step.url)
				);
				const imgPath = `/assets/snake-${i + 1}.png`;
				return (
					<li key={step.name} className="relative overflow-hidden lg:flex-1">
						<div>
							<span
								className={cn(
									"absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
									{
										"bg-zinc-700": isCurrent,
										"bg-primary": isCompleted,
									}
								)}
								aria-hidden="true"
							/>
						</div>
					</li>
				);
			})}
		</ol>
	);
};

export default Steps;
