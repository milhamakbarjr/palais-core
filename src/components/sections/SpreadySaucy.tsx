export default function SpreadySaucy() {
	return (
		<section
			aria-label="spready-saucy-headline"
			className="relative w-full bg-white overflow-hidden"
			style={{ minHeight: "722px" }}
		>
			{/* Left bleed photo — pasta bowl */}
			<div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
				<img
					src="/assets/RecipePhotos/Sauce-Nature-Moroccan-One-Pot-Pasta-(c)FoodLove-08390-1024x683.jpg"
					alt="Moroccan one-pot pasta made with Pa'lais sauce"
					width={360}
					height={420}
					className="object-cover rounded-r-[24px] shadow-[0_30px_60px_-20px_rgba(35,67,134,0.25)]"
					style={{ width: "360px", height: "420px" }}
				/>
			</div>

			{/* Right bleed photo — toast */}
			<div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
				<img
					src="/assets/RecipePhotos/Foto-Palais-Spread-Garlic-Herbs-Toast-(c)FoodLove-06446-scaled.jpg"
					alt="Garlic & herbs Pa'lais spread on toast"
					width={360}
					height={420}
					className="object-cover rounded-l-[24px] shadow-[0_30px_60px_-20px_rgba(35,67,134,0.25)]"
					style={{ width: "360px", height: "420px" }}
				/>
			</div>

			{/* Centered text content */}
			<div className="relative mx-auto max-w-[1173px] flex flex-col items-center justify-center text-center px-6 py-32">
				{/* SPREADY, SAUCY with flanking em-dashes */}
				<div className="flex items-center justify-center gap-6">
					<span
						aria-hidden="true"
						className="bg-cobalt inline-block"
						style={{ width: "40px", height: "4px" }}
					/>
					<h2
						className="text-cobalt uppercase tracking-[0.02em] m-0"
						style={{
							fontFamily: "var(--font-display)",
							fontSize: "88px",
							lineHeight: "58px",
						}}
					>
						Spready, Saucy
					</h2>
					<span
						aria-hidden="true"
						className="bg-cobalt inline-block"
						style={{ width: "40px", height: "4px" }}
					/>
				</div>

				{/* and non-dairy! handwritten */}
				<div className="flex items-center justify-center gap-4 mt-10">
					<span
						aria-hidden="true"
						className="bg-cobalt inline-block"
						style={{ width: "28px", height: "3px" }}
					/>
					<h2
						className="text-cobalt m-0"
						style={{
							fontFamily: "var(--font-hand)",
							fontSize: "52px",
							lineHeight: "48px",
						}}
					>
						and non-dairy!
					</h2>
					<span
						aria-hidden="true"
						className="bg-cobalt inline-block"
						style={{ width: "28px", height: "3px" }}
					/>
				</div>

				{/* Body paragraph */}
				<p
					className="text-cobalt mt-10 max-w-[506px]"
					style={{
						fontFamily: "var(--font-body)",
						fontSize: "16px",
						lineHeight: "28px",
						letterSpacing: "1.6px",
					}}
				>
					To make Pa'lais, first we take some organic cashews. Then, we turn
					them into milk and add cultures. We keep it all warm and cosy, so that
					it gets very cultured indeed, giving it the characteristic Pa'lais
					taste and texture. And voila! Tasty creamy products made without
					bothering any cows!
				</p>
			</div>
		</section>
	);
}
