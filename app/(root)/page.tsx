import Hero from "@/components/Hero";
import Animated from "@/components/Animated";
import CreateCase from "@/components/CreateCase";

export default function Home() {
	return (
		<div className="bg-slate-50">
			<Hero />
			<Animated />
			<CreateCase />
		</div>
	);
}
