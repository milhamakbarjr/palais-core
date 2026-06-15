import { Pill } from "../ui/Pill";

type CardConfig = {
	rotate: string;
	translate: string;
	z: number;
	photo: string;
	caption: string;
};

const cards: CardConfig[] = [
	{
		rotate: "-5deg",
		translate: "translate(-40px, 30px)",
		z: 10,
		photo:
			"/assets/RecipePhotos/Spread-Garlic-Fine-Herbs-Falafel-wrap-DSC09344-scaled.jpg",
		caption: "falafel wraps",
	},
	{
		rotate: "2deg",
		translate: "translate(60px, -10px)",
		z: 20,
		photo:
			"/assets/RecipePhotos/Foto-Palais-Spread-Garlic-Herbs-Toast-(c)FoodLove-06446-scaled.jpg",
		caption: "garlic herb toast",
	},
	{
		rotate: "-3deg",
		translate: "translate(160px, 60px)",
		z: 15,
		photo:
			"/assets/RecipePhotos/Foto-Spread-Nature-Pancakes-(c)FoodLove-07180-1024x1536.jpg",
		caption: "fluffy pancakes",
	},
];

function InstaCard({ card }: { card: CardConfig }) {
	return (
		<div
			className="absolute top-1/2 left-1/2 w-[300px] h-[380px] bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col"
			style={{
				transform: `translate(-50%, -50%) ${card.translate} rotate(${card.rotate})`,
				zIndex: card.z,
			}}
		>
			{/* IG header */}
			<div className="flex items-center gap-2 px-3 py-2 border-b border-black/5">
				<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-wave via-orange to-yellow-banner p-[2px]">
					<div className="w-full h-full rounded-full bg-white p-[1.5px]">
						<img
							src="/assets/Brand/brand-logo-positive.svg"
							alt=""
							className="w-full h-full object-contain"
						/>
					</div>
				</div>
				<span
					className="text-[11px] text-cobalt"
					style={{ fontFamily: "var(--font-body)", letterSpacing: "0.5px" }}
				>
					palais.bio
				</span>
				<span className="ml-auto text-cobalt/60 text-xs leading-none tracking-[2px]">
					•••
				</span>
			</div>

			{/* Photo */}
			<div className="relative flex-1 overflow-hidden">
				<img
					src={card.photo}
					alt={card.caption}
					className="absolute inset-0 w-full h-full object-cover"
				/>
			</div>

			{/* Footer */}
			<div className="flex items-center justify-between px-3 py-2 border-t border-black/5">
				<div className="flex items-center gap-3">
					<span className="w-5 h-5 rounded-full border-2 border-cobalt" />
					<span className="w-5 h-5 rounded-sm border-2 border-cobalt" />
					<span className="w-5 h-5 rotate-45 border-2 border-cobalt" />
				</div>
				<span className="w-5 h-5 rounded-sm border-2 border-cobalt" />
			</div>
		</div>
	);
}

export default function YouArePalais() {
	return (
		<section
			className="relative w-full bg-white overflow-hidden"
			style={{ height: "984px" }}
		>
			{/* Pink wave right half */}
			<div
				className="absolute top-0 right-0 h-full bg-pink-wave"
				style={{
					width: "55%",
					clipPath:
						"polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 8% 92%, 18% 82%, 6% 72%, 16% 62%, 4% 52%, 16% 42%, 6% 32%, 18% 22%, 8% 12%)",
				}}
			/>

			{/* Decorations */}
			<img
				src="/assets/Community/community-deco1.svg"
				alt=""
				aria-hidden="true"
				className="absolute top-16 left-12 w-[140px] opacity-90 pointer-events-none"
			/>
			<img
				src="/assets/Community/community-nut1.svg"
				alt=""
				aria-hidden="true"
				className="absolute top-1/2 left-4 w-[90px] -translate-y-1/2 opacity-80 pointer-events-none"
			/>
			<img
				src="/assets/Community/community-deco2.svg"
				alt=""
				aria-hidden="true"
				className="absolute bottom-20 left-24 w-[120px] opacity-80 pointer-events-none"
			/>

			{/* Inner content */}
			<div className="relative max-w-[1173px] mx-auto h-full px-8 grid grid-cols-2 gap-12 items-center">
				{/* Left column */}
				<div className="flex flex-col items-center text-center text-cobalt z-10">
					<h2
						className="text-[72px] leading-[0.95] tracking-tight uppercase"
						style={{ fontFamily: "var(--font-display)" }}
					>
						YOU ARE
					</h2>
					<span
						className="text-[48px] leading-none mt-3"
						style={{ fontFamily: "var(--font-hand)" }}
					>
						Pa'lais
					</span>

					<p
						className="mt-8 max-w-[380px] text-[14px] leading-6 text-cobalt"
						style={{
							fontFamily: "var(--font-body)",
							letterSpacing: "1.6px",
						}}
					>
						There's plenty of room in our Plant Kitchen, come and chill with us.
						Our community is great for recipes and inspo, and you can even share
						your own if you want. No pressure. Just make sure to add @palais.bio
						or #palaisbio to your post.
					</p>

					<div className="mt-10">
						<Pill variant="orangeOutline" href="#community">
							DISCOVER
						</Pill>
					</div>
				</div>

				{/* Right column — Instagram card stack */}
				<div className="relative h-full">
					{cards.map((card) => (
						<InstaCard key={card.caption} card={card} />
					))}
				</div>
			</div>
		</section>
	);
}
