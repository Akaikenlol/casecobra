"use server";

import { saveConfigProps } from "@/constants";
import { db } from "@/db";
import { CaseColor } from "@prisma/client";
import { mapColorCodeToCaseColor } from "../mapColorToCaseColor";

export async function saveConfig({
	color,
	finish,
	material,
	model,
	configId,
}: saveConfigProps) {
	await db.configuration.update({
		where: { id: configId },
		data: { color, finish, material, model },
	});
}
