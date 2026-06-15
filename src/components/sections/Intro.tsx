import { GrowingSprig } from "@/components/motion/GrowingSprig";
import { Pill } from "@/components/ui/Pill";

export default function Intro() {
	return (
		<section
			className="relative w-full bg-white overflow-hidden"
			style={{ minHeight: "736px" }}
		>
			{/* Top floating cobalt nut */}
			<GrowingSprig
				src="/assets/IntroSection/nut-1.svg"
				className="absolute top-12 left-1/2 -translate-x-[260px] w-10 opacity-90 [&_svg]:h-auto [&_svg]:w-full"
				stagger={0.05}
			/>

			{/* Left side — cashew + knife + leaves illustration with coral brush strokes */}
			<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-[520px] pointer-events-none">
				{/* Coral brush stroke blocks behind the plant */}
				<div
					className="absolute bg-coral/70"
					style={{
						left: "60px",
						top: "120px",
						width: "220px",
						height: "60px",
						borderRadius: "50% 40% 60% 30% / 60% 50% 40% 50%",
						transform: "rotate(-12deg)",
					}}
				/>
				<div
					className="absolute bg-coral/50"
					style={{
						left: "30px",
						top: "260px",
						width: "180px",
						height: "44px",
						borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
						transform: "rotate(8deg)",
					}}
				/>
				<GrowingSprig
					src="/assets/HomePage/Plant02.svg"
					className="absolute left-4 top-8 w-[380px] [&_svg]:h-auto [&_svg]:w-full"
				/>
			</div>

			{/* Right side — toast photograph bleeding off right edge */}
			<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[480px] overflow-hidden rounded-l-[50%]">
				<img
					src="/assets/RecipePhotos/Foto-Palais-Spread-Garlic-Herbs-Toast-(c)FoodLove-06446-scaled.jpg"
					alt="Pa'lais spread on toast"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Centered text block */}
			<div
				className="relative z-10 flex flex-col items-center justify-center px-6"
				style={{ minHeight: "736px" }}
			>
				<div className="max-w-[506px] mx-auto text-center">
					<p
						className="text-cobalt"
						style={{
							fontFamily: "var(--font-body)",
							fontSize: "18px",
							lineHeight: "30px",
							letterSpacing: "3.2px",
						}}
					>
						Pa'lais exists because we felt there needed to be more yummy and
						planet-friendly food. So we made our creamy spreads and sauces
						entirely out of plants.
					</p>

					<div className="mt-10 flex justify-center">
						<Pill variant="orangeOutline" href="#meet-us">
							MEET US
						</Pill>
					</div>
				</div>
			</div>

			{/* Bottom-center crumbs detail */}
			<img
				src="/assets/HomePage_raster/crumbs-1.png"
				alt=""
				aria-hidden="true"
				className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-auto opacity-90 pointer-events-none"
			/>

			{/* Bottom-right saturated orange organic curve */}
			<div
				className="absolute -bottom-24 -right-24 w-[420px] h-[280px] bg-orange pointer-events-none"
				style={{
					borderRadius: "60% 40% 50% 50% / 70% 60% 40% 30%",
				}}
				aria-hidden="true"
			/>
		</section>
	);
}
