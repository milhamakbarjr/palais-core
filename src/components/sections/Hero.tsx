import { GrowingSprig } from "#/components/motion/GrowingSprig";

export default function Hero() {
	return (
		<section
			className="relative w-full bg-cream overflow-hidden"
			style={{ minHeight: "900px" }}
		>
			{/* Left mint blob + cobalt botanical */}
			<div className="absolute left-0 top-0 h-full w-1/2 pointer-events-none">
				<div
					className="absolute bg-mint-light"
					style={{
						left: "-120px",
						top: "140px",
						width: "640px",
						height: "640px",
						borderRadius: "50% 60% 40% 50%",
						transform: "rotate(-8deg)",
					}}
				/>
				<GrowingSprig
					src="/assets/HomePage/Plant01.svg"
					className="absolute [&_svg]:h-auto [&_svg]:w-full"
					style={{
						left: "80px",
						top: "200px",
						width: "360px",
					}}
				/>
			</div>

			{/* Right orange organic shape with food photo behind */}
			<div
				className="absolute right-0 top-0 h-full pointer-events-none"
				style={{ width: "55%" }}
			>
				<div
					className="absolute"
					style={{
						right: "-80px",
						top: "60px",
						width: "820px",
						height: "780px",
					}}
				>
					{/* Food photo clipped by orange shape silhouette */}
					<div
						className="absolute inset-0"
						style={{
							WebkitMaskImage:
								"url(/assets/Slider/big-orange-shape-desktop.svg)",
							maskImage: "url(/assets/Slider/big-orange-shape-desktop.svg)",
							WebkitMaskRepeat: "no-repeat",
							maskRepeat: "no-repeat",
							WebkitMaskSize: "contain",
							maskSize: "contain",
							WebkitMaskPosition: "center",
							maskPosition: "center",
						}}
					>
						<img
							src="/assets/RecipePhotos/Foto-Palais-Spread-Garlic-Herbs-Toast-(c)FoodLove-06446-scaled.jpg"
							alt="Pa'lais spread on toast with garlic and herbs"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-orange mix-blend-multiply opacity-80" />
					</div>
					{/* Orange shape outline on top for color saturation */}
					<img
						src="/assets/Slider/big-orange-shape-desktop.svg"
						alt=""
						className="absolute inset-0 w-full h-full opacity-0"
					/>
				</div>
			</div>

			{/* Centered content column */}
			<div
				className="relative mx-auto"
				style={{ maxWidth: "1173px", paddingTop: "220px" }}
			>
				<div className="relative flex flex-col items-center text-center">
					<h1
						className="text-cobalt"
						style={{
							fontFamily: "var(--font-display)",
							fontSize: "86px",
							lineHeight: "63px",
							margin: 0,
							whiteSpace: "pre-line",
						}}
					>
						{"Grow your\nplant kitchen"}
					</h1>

					{/* Row of 8 small cobalt dots */}
					<div
						className="flex items-center gap-3"
						style={{ marginTop: "40px" }}
					>
						{Array.from({ length: 8 }).map((_, i) => (
							<span
								key={i}
								className="bg-cobalt rounded-full"
								style={{ width: "7px", height: "7px" }}
							/>
						))}
					</div>

					<h2
						className="text-cobalt"
						style={{
							fontFamily: "var(--font-hand)",
							fontSize: "58px",
							lineHeight: "52px",
							margin: 0,
							marginTop: "36px",
							whiteSpace: "pre-line",
						}}
					>
						{"The future\nof cooking - today"}
					</h2>
				</div>
			</div>

			{/* Bottom-left scroll-down circle */}
			<a
				href="#intro"
				className="absolute"
				style={{ left: "48px", bottom: "48px", width: "78px", height: "78px" }}
				aria-label="Scroll down"
			>
				<img
					src="/assets/HomePage/arrow-scroll-down-circle.svg"
					alt=""
					className="w-full h-full"
				/>
			</a>

			{/* Center-bottom tiny botanical sprig */}
			<GrowingSprig
				src="/assets/HomePage/Plant03.svg"
				className="absolute left-1/2 -translate-x-1/2 pointer-events-none [&_svg]:h-auto [&_svg]:w-full"
				style={{ bottom: "56px", width: "72px" }}
				stagger={0.06}
			/>
		</section>
	);
}
