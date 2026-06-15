import { GrowingSprig } from "../motion/GrowingSprig";
import { PathFollower } from "../motion/PathFollower";
import { Pill } from "../ui/Pill";

// Cubic-Bezier sweep into the bubble's resting position. Starts ~620px right
// and 140px above the final spot, arcs down through a low control point, and
// settles at (0,0). Hand-drawn feel without autoRotate so the -6deg tilt holds.
const BUBBLE_PATH = "M 620 -140 C 420 -180, 80 60, 0 0";

const LEFT_CLIP =
	"polygon(4% 6%, 12% 2%, 26% 5%, 40% 1%, 58% 4%, 74% 1%, 88% 5%, 96% 12%, 99% 28%, 96% 44%, 99% 60%, 97% 76%, 94% 90%, 84% 97%, 68% 99%, 50% 96%, 32% 99%, 16% 97%, 6% 92%, 2% 78%, 5% 62%, 1% 46%, 4% 30%, 1% 16%)";

const RIGHT_CLIP =
	"polygon(6% 4%, 22% 1%, 38% 5%, 54% 2%, 70% 6%, 84% 2%, 95% 10%, 99% 24%, 96% 40%, 99% 56%, 95% 72%, 98% 86%, 90% 96%, 76% 99%, 60% 95%, 44% 99%, 28% 96%, 14% 99%, 4% 90%, 1% 74%, 4% 58%, 1% 42%, 5% 26%, 2% 12%)";

export default function FinderQuestions() {
	return (
		<section
			data-finder-questions
			className="relative w-full bg-white py-32 overflow-hidden"
		>
			<div className="max-w-[1173px] mx-auto relative">
				{/* Top-left botanical leaves */}
				<GrowingSprig
					src="/assets/HomePage/Plant01.svg"
					className="absolute -top-10 -left-6 w-[140px] select-none pointer-events-none"
				/>

				{/* Top-center small cashew nut */}
				<GrowingSprig
					src="/assets/IntroSection/nut-1.svg"
					className="absolute top-4 left-1/2 -translate-x-1/2 w-[58px] rotate-12 select-none pointer-events-none"
					stagger={0.05}
				/>

				<div className="flex justify-center gap-12 relative">
					{/* LEFT PANEL — Pa'lais Finder */}
					<div className="relative w-[540px] h-[560px]">
						<div
							className="absolute inset-0 bg-blue-panel overflow-hidden"
							style={{ clipPath: LEFT_CLIP }}
						>
							{/* photo bg with blue overlay */}
							<div
								className="absolute inset-0 bg-cover bg-center"
								style={{
									backgroundImage:
										"url(/assets/RecipePhotos/Foto-Palais-Spread-Garlic-Herbs-Toast-(c)FoodLove-06446-scaled.jpg)",
								}}
							/>
							<div
								className="absolute inset-0 bg-blue-panel"
								style={{ mixBlendMode: "multiply" }}
							/>
							<div className="absolute inset-0 bg-blue-panel/40" />

							{/* content */}
							<div className="relative z-10 h-full flex flex-col items-start justify-center px-16">
								<h3
									className="text-white text-[46px] leading-[46px] tracking-[2px] whitespace-pre-line mb-6"
									style={{ fontFamily: "var(--font-wood)" }}
								>
									{"PA'LAIS\nFINDER"}
								</h3>
								<p
									className="text-white text-[14px] leading-[22px] max-w-[280px] mb-8"
									style={{ fontFamily: "var(--font-body)" }}
								>
									Pa'lais likes to hang out in nearby shops. Our web designer
									poured their heart into making the little button below which
									lets you see which ones.
								</p>
								<Pill variant="white" href="#store-locator">
									Store Locator
								</Pill>
							</div>
						</div>
					</div>

					{/* RIGHT PANEL — Got any questions */}
					<div className="relative w-[540px] h-[560px]">
						<div
							className="absolute inset-0 bg-blue-panel-2 overflow-hidden"
							style={{ clipPath: RIGHT_CLIP }}
						>
							<div
								className="absolute inset-0 bg-cover bg-center"
								style={{
									backgroundImage:
										"url(/assets/RecipePhotos/Sauce-Nature-Moroccan-One-Pot-Pasta-(c)FoodLove-08390-1024x683.jpg)",
								}}
							/>
							<div
								className="absolute inset-0 bg-blue-panel-2"
								style={{ mixBlendMode: "multiply" }}
							/>
							<div className="absolute inset-0 bg-blue-panel-2/40" />

							<div className="relative z-10 h-full flex flex-col items-start justify-center px-16">
								<h3
									className="text-white text-[46px] leading-[46px] tracking-[2px] whitespace-pre-line mb-6"
									style={{ fontFamily: "var(--font-wood)" }}
								>
									{"GOT ANY\nQUESTIONS?"}
								</h3>
								<p
									className="text-white text-[14px] leading-[22px] max-w-[280px] mb-8"
									style={{ fontFamily: "var(--font-body)" }}
								>
									Here's where you can see the questions people ask the most.
									You could almost call these questions "frequently asked".
								</p>
								<Pill variant="white" href="#answers">
									Read Our Answers
								</Pill>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom-left tian/casserole photo bleeding off left */}
				<div className="absolute -bottom-16 -left-24 w-[280px] h-[280px] rounded-full overflow-hidden border-8 border-white shadow-xl rotate-[-8deg] z-20">
					<img
						src="/assets/RecipePhotos/Sauce-Bechamel-Tian-de-Provence-DSC09067-scaled.jpg"
						alt="Tian de Provence"
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Yellow "So vegan" speech bubble — scroll-driven swoop along a hand-drawn curve */}
				<PathFollower
					path={BUBBLE_PATH}
					triggerSelector="[data-finder-questions]"
					start="top bottom"
					end="center 60%"
					className="absolute bottom-8 left-[230px] z-30"
				>
					<div className="rotate-[-6deg]">
						<div className="relative bg-yellow-banner rounded-[28px] px-7 py-4 shadow-lg">
							<span
								className="text-white text-[30px] leading-none whitespace-nowrap"
								style={{ fontFamily: "var(--font-hand)" }}
							>
								So vegan
							</span>
							<div className="absolute -bottom-3 left-10 w-6 h-6 bg-yellow-banner rotate-45" />
						</div>
					</div>
				</PathFollower>

				{/* Bottom-right cobalt fennel sprig */}
				<GrowingSprig
					src="/assets/Community/community-deco2.svg"
					className="absolute -bottom-10 -right-12 w-[180px] rotate-12 select-none pointer-events-none z-20"
				/>
			</div>
		</section>
	);
}
