import { createFileRoute } from "@tanstack/react-router";

import Banners from "#/components/sections/Banners";
import FinderQuestions from "#/components/sections/FinderQuestions";
import Footer from "#/components/sections/Footer";
import Header from "#/components/sections/Header";
import Hero from "#/components/sections/Hero";
import Intro from "#/components/sections/Intro";
import Newsletter from "#/components/sections/Newsletter";
import RecipeSlider from "#/components/sections/RecipeSlider";
import SpreadySaucy from "#/components/sections/SpreadySaucy";
import YouArePalais from "#/components/sections/YouArePalais";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main className="relative w-full overflow-x-hidden">
			<Header />
			<Hero />
			<Intro />
			<RecipeSlider />
			<SpreadySaucy />
			<Banners />
			<YouArePalais />
			<FinderQuestions />
			<Newsletter />
			<Footer />
		</main>
	);
}
