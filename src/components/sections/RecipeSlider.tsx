import { useCallback, useEffect, useRef, useState } from "react";

import { Pill } from "../ui/Pill";

type Recipe = {
	title: string;
	time: string;
	photo: string;
	dietary: Array<"V" | "Vg" | "L" | "S" | "G">;
	difficulty: number;
};

const recipes: Array<Recipe> = [
	{
		title: "Falafel wraps with roasted carrot-beet salad and pickles",
		time: "25 min",
		photo:
			"/assets/RecipePhotos/Spread-Garlic-Fine-Herbs-Falafel-wrap-DSC09344-scaled.jpg",
		dietary: ["V", "Vg", "L", "S", "G"],
		difficulty: 2,
	},
	{
		title: "Strawberry toast with lemon basil and balsamic vinegar",
		time: "10 min",
		photo:
			"/assets/RecipePhotos/Spread-Nature-Breakfast-Toast-DSC08857-scaled.jpg",
		dietary: ["V", "Vg", "L", "S", "G"],
		difficulty: 1,
	},
	{
		title: "Three-coloured zucchini tomato tian with basil",
		time: "30 min",
		photo:
			"/assets/RecipePhotos/Sauce-Bechamel-Tian-de-Provence-DSC09067-scaled.jpg",
		dietary: ["V", "Vg", "L", "S", "G"],
		difficulty: 3,
	},
];

// Card width + gap; used for one-card-per-click pagination.
const CARD_STEP = 459 + 24;

function DietaryBadge({ letter }: { letter: string }) {
	return (
		<div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
			<span
				className="text-[11px] font-bold text-cobalt"
				style={{ fontFamily: "var(--font-ui)" }}
			>
				{letter}
			</span>
		</div>
	);
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
	return (
		<div className="relative h-[464px] w-[459px] shrink-0 overflow-hidden rounded-[18px] shadow-lg">
			<img
				src={recipe.photo}
				alt={recipe.title}
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

			{/* Dietary badges */}
			<div className="absolute top-5 left-5 flex gap-1.5">
				{recipe.dietary.map((d, i) => (
					<DietaryBadge key={`${d}-${i}`} letter={d} />
				))}
			</div>

			{/* Cooking time pill */}
			<div className="absolute top-5 right-5 flex items-center gap-2 rounded-full bg-white px-4 py-2">
				<img src="/assets/ICONS/cooking-time.svg" alt="" className="h-4 w-4" />
				<span
					className="text-cobalt"
					style={{ fontFamily: "var(--font-hand)", fontSize: "16px" }}
				>
					{recipe.time}
				</span>
			</div>

			{/* Title */}
			<div className="absolute bottom-5 left-5 max-w-[300px]">
				<h3
					className="text-white uppercase leading-tight"
					style={{ fontFamily: "var(--font-wood)", fontSize: "24px" }}
				>
					{recipe.title}
				</h3>
			</div>

			{/* Difficulty dots */}
			<div className="absolute right-5 bottom-6 flex gap-1.5">
				{[0, 1, 2].map((i) => (
					<div
						key={i}
						className={`h-2 w-2 rounded-full ${
							i < recipe.difficulty ? "bg-white" : "bg-white/40"
						}`}
					/>
				))}
			</div>
		</div>
	);
}

function ArrowButton({
	direction,
	onClick,
	disabled,
}: {
	direction: "prev" | "next";
	onClick: () => void;
	disabled: boolean;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}
			aria-label={direction === "prev" ? "Previous recipe" : "Next recipe"}
			className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-cobalt shadow-lg transition-opacity duration-150 ease-out hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				className={`h-5 w-5 ${direction === "prev" ? "rotate-180" : ""}`}
				aria-hidden="true"
			>
				<path
					d="M9 6l6 6-6 6"
					stroke="currentColor"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
}

export default function RecipeSlider() {
	const trackRef = useRef<HTMLDivElement>(null);
	const [atStart, setAtStart] = useState(true);
	const [atEnd, setAtEnd] = useState(false);

	const updateBounds = useCallback(() => {
		const el = trackRef.current;
		if (!el) return;
		const maxScroll = el.scrollWidth - el.clientWidth;
		setAtStart(el.scrollLeft <= 1);
		setAtEnd(el.scrollLeft >= maxScroll - 1);
	}, []);

	useEffect(() => {
		const el = trackRef.current;
		if (!el) return;
		updateBounds();
		el.addEventListener("scroll", updateBounds, { passive: true });
		window.addEventListener("resize", updateBounds);
		return () => {
			el.removeEventListener("scroll", updateBounds);
			window.removeEventListener("resize", updateBounds);
		};
	}, [updateBounds]);

	const scrollByCard = (dir: 1 | -1) => {
		trackRef.current?.scrollBy({ left: dir * CARD_STEP, behavior: "smooth" });
	};

	return (
		<section className="relative w-full overflow-hidden bg-white">
			<div className="relative mx-auto h-[700px] w-full max-w-[1440px]">
				{/* Orange organic blob — right ~55%, bleeds off edges */}
				<div
					className="absolute top-0 right-0 bottom-0 w-[58%] bg-[#f08d52]"
					style={{
						backgroundImage: "url(/assets/Slider/big-orange-shape-desktop.svg)",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "right center",
						backgroundSize: "cover",
						WebkitMaskImage: "url(/assets/Slider/big-orange-shape-desktop.svg)",
						WebkitMaskRepeat: "no-repeat",
						WebkitMaskPosition: "right center",
						WebkitMaskSize: "cover",
						maskImage: "url(/assets/Slider/big-orange-shape-desktop.svg)",
						maskRepeat: "no-repeat",
						maskPosition: "right center",
						maskSize: "cover",
					}}
				/>

				{/* Inner content */}
				<div className="relative mx-auto flex h-full max-w-[1320px] items-center px-8">
					{/* Left: recipe carousel — fits ~1 card + half-peek, scroll horizontally for the rest */}
					<div className="relative z-10 flex h-full w-[42%] flex-col items-start justify-center gap-5">
						<div
							ref={trackRef}
							className="recipe-track flex w-full items-center gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory py-4"
							style={{ scrollbarWidth: "none" }}
						>
							{recipes.map((r) => (
								<div key={r.title} className="snap-start shrink-0">
									<RecipeCard recipe={r} />
								</div>
							))}
						</div>

						{/* Carousel controls */}
						<div className="flex items-center gap-3">
							<ArrowButton
								direction="prev"
								onClick={() => scrollByCard(-1)}
								disabled={atStart}
							/>
							<ArrowButton
								direction="next"
								onClick={() => scrollByCard(1)}
								disabled={atEnd}
							/>
							<span
								className="ml-2 text-cobalt/70 text-sm tracking-wider uppercase"
								style={{ fontFamily: "var(--font-ui)" }}
							>
								Drag or use arrows
							</span>
						</div>
					</div>

					{/* Right: text block over orange */}
					<div className="absolute top-1/2 right-8 z-20 w-[420px] -translate-y-1/2 text-white">
						<h1
							className="uppercase text-white"
							style={{
								fontFamily: "var(--font-wood)",
								fontSize: "76px",
								lineHeight: "78px",
							}}
						>
							INCREDIBLE
							<br />
							RECIPES
						</h1>
						<h2
							className="mt-4 text-white"
							style={{
								fontFamily: "var(--font-hand)",
								fontSize: "30px",
								lineHeight: "1.15",
							}}
						>
							that will take your taste buds to
							<br />
							heaven and back
						</h2>
						<p
							className="mt-6 text-white"
							style={{
								fontFamily: "var(--font-body)",
								fontSize: "14px",
								lineHeight: "1.6",
							}}
						>
							"Vegan food is bland and boring." You've heard it, we've heard it.
							It's why we make Pa'lais so delicious. Try it out with these
							delicious recipes, or get inspired to do your own thing.
						</p>
						<div className="mt-8">
							<Pill variant="cobalt">CHECK OUT OUR RECIPES</Pill>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
