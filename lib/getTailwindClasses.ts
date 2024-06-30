export function getTailwindClasses(colorTw: any) {
	switch (colorTw) {
		case "zinc-900":
			return "bg-zinc-900 border-zinc-900";
		case "blue-950":
			return "bg-blue-950 border-blue-950";
		case "rose-950":
			return "bg-rose-950 border-rose-950";
		case "slate-300":
			return "bg-slate-300 border-slate-300";
		default:
			return "";
	}
}
