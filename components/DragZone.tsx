"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { Input } from "./ui/input";

const DragZone = () => {
	const [isDragOver, setIsDragOver] = useState<boolean>(false);

	const onDropRejected = () => {};
	const onDropAccepted = () => {
		console.log("Accepted");
	};

	return (
		<div
			className={cn(
				"relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
				{
					"ring-blue-900/15 bg-blue-900/10": isDragOver,
				}
			)}
		>
			<div className="relative flex flex-1 flex-col items-center justify-center w-full">
				<Dropzone
					onDropRejected={onDropRejected}
					onDropAccepted={onDropAccepted}
					accept={{
						"image/png": [".png"],
						"image/jpeg": [".jpeg"],
						"image/jpg": [".jpg"],
					}}
					onDragEnter={() => setIsDragOver(true)}
					onDragLeave={() => setIsDragOver(false)}
				>
					{({ getRootProps, getInputProps }) => (
						<div
							className="w-full h-full flex-1 flex flex-col items-center justify-center"
							{...getRootProps()}
						>
							<Input className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 min-h-[calc(100vh-15rem-50px)]" />
						</div>
					)}
				</Dropzone>
			</div>
		</div>
	);
};

export default DragZone;
