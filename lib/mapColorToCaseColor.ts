// import { CaseColor } from "@prisma/client";
// import { CaseColorCodes } from "../types/index";

// export function mapColorCodeToCaseColor(colorCode: string): CaseColor {
// 	const caseColor = Object.keys(CaseColorCodes).find(
// 		(key) => CaseColorCodes[key as keyof typeof CaseColorCodes] === colorCode
// 	);
// 	if (!caseColor) {
// 		throw new Error(`Invalid color code: ${colorCode}`);
// 	}
// 	return caseColor as CaseColor;
// }
