import { BlindsReveal } from "../motion/BlindsReveal";
import { Pill } from "../ui/Pill";

export default function Banners() {
	return (
		<section
			className="w-full relative overflow-hidden"
			style={{ height: "696px" }}
		>
			{/* LEFT: green spreads half */}
			<div
				className="absolute inset-y-0 left-0 bg-green-banner"
				style={{
					width: "56%",
					clipPath:
						"polygon(0 0, 100% 0, 92% 12%, 96% 28%, 88% 44%, 94% 60%, 86% 76%, 92% 92%, 84% 100%, 0 100%)",
				}}
			/>

			{/* RIGHT: yellow cuisine half (full background; left half overlays it) */}
			<div className="absolute inset-0 bg-yellow-banner -z-10" />

			{/* Inner content grid */}
			<div className="relative max-w-[1173px] mx-auto h-full grid grid-cols-2 gap-12 px-8">
				{/* LEFT CONTENT */}
				<div className="relative h-full flex items-center">
					{/* Polaroid stack */}
					<div className="relative w-[260px] shrink-0 mr-6 hidden md:block">
						<div
							className="absolute top-6 -left-2 bg-white p-3 pb-10 shadow-xl rotate-[-8deg]"
							style={{ width: "220px" }}
						>
							<img
								src="/assets/RecipePhotos/Spread-Nature-Breakfast-Toast-DSC08857-scaled.jpg"
								alt=""
								className="w-full h-[200px] object-cover"
							/>
						</div>
						<div
							className="absolute top-28 left-16 bg-white p-3 pb-10 shadow-xl rotate-[6deg]"
							style={{ width: "210px" }}
						>
							<img
								src="/assets/RecipePhotos/Spread-Garlic-Fine-Herbs-Falafel-wrap-DSC09344-scaled.jpg"
								alt=""
								className="w-full h-[190px] object-cover"
							/>
						</div>
					</div>

					<div className="relative z-10 max-w-[320px] text-white">
						<BlindsReveal color="#67B988" className="inline-block">
							<h3
								className="uppercase leading-[40px] tracking-wide"
								style={{
									fontFamily: "var(--font-wood)",
									fontSize: "46px",
								}}
							>
								PA'LAIS
								<br />
								SPREADS
							</h3>
						</BlindsReveal>
						<p
							className="mt-5 mb-7 max-w-[280px]"
							style={{
								fontFamily: "var(--font-body)",
								fontSize: "16px",
								lineHeight: "26px",
							}}
						>
							Our spreads have incredible fresh flavours and creamy textures.
							That just means they taste good. Obviously, we would say that. But
							give them a try to find out if we're telling the truth...
						</p>
						<Pill variant="white">SPREAD THE LOVE</Pill>
					</div>
				</div>

				{/* RIGHT CONTENT */}
				<div className="relative h-full flex items-center justify-end">
					<div className="relative z-10 max-w-[320px] text-white text-left">
						<BlindsReveal color="#FEC601" className="inline-block">
							<h3
								className="uppercase leading-[40px] tracking-wide"
								style={{
									fontFamily: "var(--font-wood)",
									fontSize: "46px",
								}}
							>
								PA'LAIS
								<br />
								CUISINE
							</h3>
						</BlindsReveal>
						<p
							className="mt-5 mb-7 max-w-[280px]"
							style={{
								fontFamily: "var(--font-body)",
								fontSize: "16px",
								lineHeight: "26px",
							}}
						>
							Pa'lais plant-based sauces are pretty simple. You don't need to be
							a chef to use our creamy Bechamel or cheesy Pasta Sauce. Something
							this tasty and easy to use shouldn't be healthy — but it is!
						</p>
						<Pill variant="white">GET SAUCY!</Pill>
					</div>

					{/* Polaroid stack right */}
					<div className="relative w-[260px] shrink-0 ml-6 hidden md:block">
						<div
							className="absolute top-8 left-2 bg-white p-3 pb-10 shadow-xl rotate-[7deg]"
							style={{ width: "220px" }}
						>
							<img
								src="/assets/RecipePhotos/Sauce-Bechamel-Tian-de-Provence-DSC09067-scaled.jpg"
								alt=""
								className="w-full h-[200px] object-cover"
							/>
						</div>
						<div
							className="absolute top-32 left-20 bg-white p-3 pb-10 shadow-xl rotate-[-6deg]"
							style={{ width: "210px" }}
						>
							<img
								src="/assets/RecipePhotos/Sauce-Nature-Moroccan-One-Pot-Pasta-(c)FoodLove-08390-1024x683.jpg"
								alt=""
								className="w-full h-[190px] object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
