import { Pill } from "../ui/Pill";

export default function Newsletter() {
	return (
		<section className="relative w-full h-[350px] bg-mint-wave overflow-hidden">
			{/* Left: tian photo bleeding off left edge */}
			<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full overflow-hidden -translate-x-[90px] shadow-xl">
				<img
					src="/assets/RecipePhotos/Sauce-Bechamel-Tian-de-Provence-DSC09067-scaled.jpg"
					alt="Tian de Provence"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Yellow speech bubble overlay */}
			<div
				className="absolute left-[210px] top-[58px] bg-yellow-banner text-white px-7 py-4 rounded-[28px] shadow-md"
				style={{
					fontFamily: "var(--font-hand)",
					fontSize: "32px",
					lineHeight: 1,
				}}
			>
				So vegan
				<span
					className="absolute -bottom-3 left-8 w-0 h-0"
					style={{
						borderLeft: "12px solid transparent",
						borderRight: "12px solid transparent",
						borderTop: "18px solid #fec601",
					}}
				/>
			</div>

			{/* Right: cobalt wheat/spoon line illustration */}
			<img
				src="/assets/Community/community-deco2.svg"
				alt=""
				className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40px] w-[280px] opacity-90"
				aria-hidden="true"
			/>

			{/* Center content */}
			<div className="relative z-10 max-w-[1173px] mx-auto h-full flex flex-col items-center justify-center px-6">
				<h2
					className="text-cobalt text-center uppercase max-w-[720px]"
					style={{
						fontFamily: "var(--font-wood)",
						fontSize: "33px",
						lineHeight: "39px",
					}}
				>
					You probably don't want another newsletter in your mailbox,
				</h2>
				<p
					className="text-cobalt text-center mt-2"
					style={{
						fontFamily: "var(--font-hand)",
						fontSize: "32px",
						lineHeight: 1.1,
					}}
				>
					but then you'd miss our fantastic recipes
				</p>

				{/* Form row */}
				<form className="mt-6 flex items-stretch bg-white rounded-full overflow-hidden shadow-md">
					<div className="relative flex items-center">
						<select
							className="appearance-none bg-white text-cobalt pl-6 pr-10 py-4 uppercase text-xs tracking-[1.6px] outline-none border-r border-cobalt/10"
							style={{ fontFamily: "var(--font-ui)" }}
							defaultValue="BE"
						>
							<option value="BE">Belgium</option>
							<option value="FR">France</option>
							<option value="NL">Netherlands</option>
							<option value="LU">Luxembourg</option>
						</select>
						<span className="pointer-events-none absolute right-3 text-cobalt text-xs">
							▾
						</span>
					</div>
					<input
						type="email"
						placeholder="EMAIL"
						className="flex-1 min-w-[220px] bg-white text-cobalt placeholder-cobalt/60 px-6 py-4 uppercase text-xs tracking-[1.6px] outline-none"
						style={{ fontFamily: "var(--font-ui)" }}
					/>
					<Pill
						variant="cobalt"
						className="rounded-l-none rounded-r-full !py-4"
					>
						Submit
					</Pill>
				</form>
			</div>
		</section>
	);
}
