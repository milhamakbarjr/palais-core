const menuLinks = [
	"Get inspired",
	"Our products",
	"For a better world",
	"Contact",
	"FAQ",
];

const legalLinks = ["LEGAL INFORMATION", "PRIVACY POLICY", "POWERED BY AD"];

const socials = [
	{ name: "facebook", src: "/assets/Socials/facebook.svg" },
	{ name: "instagram", src: "/assets/Socials/instagram.svg" },
	{ name: "linkedin", src: "/assets/Socials/linkedin.svg" },
];

function ColumnHeading({
	children,
	icon,
}: {
	children: React.ReactNode;
	icon?: React.ReactNode;
}) {
	return (
		<h3
			className="flex items-center gap-2 text-white uppercase mb-6"
			style={{
				fontFamily: "var(--font-ui)",
				fontSize: "16px",
				letterSpacing: "1.6px",
			}}
		>
			{icon}
			<span>{children}</span>
		</h3>
	);
}

export default function Footer() {
	return (
		<footer
			className="w-full relative bg-cobalt text-white"
			style={{ minHeight: "528px" }}
		>
			<div className="max-w-[1173px] mx-auto px-6 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr_1fr] gap-10 lg:gap-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<img
							src="/assets/Brand/brand-logo-negative.svg"
							alt="Pa'lais"
							width={140}
							height={64}
							className="block"
						/>
					</div>

					{/* MENU column */}
					<div>
						<ColumnHeading>MENU</ColumnHeading>
						<ul
							className="space-y-1"
							style={{
								fontFamily: "var(--font-body)",
								fontSize: "14px",
								lineHeight: "26px",
							}}
						>
							{menuLinks.map((item) => (
								<li key={item}>
									<a
										href="#"
										className="text-white/80 hover:text-white transition-colors"
									>
										{item}
									</a>
								</li>
							))}
							<li aria-hidden="true" className="h-4" />
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition-colors"
								>
									For professionals
								</a>
							</li>
						</ul>
					</div>

					{/* STORE LOCATOR column */}
					<div>
						<ColumnHeading
							icon={
								<img
									src="/assets/pin.svg"
									alt=""
									width={14}
									height={18}
									className="inline-block"
								/>
							}
						>
							STORE LOCATOR
						</ColumnHeading>
						<p
							className="text-white/80 max-w-[220px]"
							style={{
								fontFamily: "var(--font-body)",
								fontSize: "14px",
								lineHeight: "26px",
							}}
						>
							We are available in various points of sale.
						</p>
					</div>

					{/* CONTACT column */}
					<div>
						<ColumnHeading>CONTACT PA'LAIS</ColumnHeading>
						<p
							className="text-white/80 max-w-[220px]"
							style={{
								fontFamily: "var(--font-body)",
								fontSize: "14px",
								lineHeight: "26px",
							}}
						>
							Do you have a question? Send it to us!
						</p>
					</div>
				</div>

				{/* Divider */}
				<div className="mt-16 mb-8 h-px w-full bg-white/30" />

				{/* Bottom row */}
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
					<ul
						className="flex flex-wrap items-center gap-x-8 gap-y-2 text-white/70"
						style={{
							fontFamily: "var(--font-ui)",
							fontSize: "11px",
							letterSpacing: "1.2px",
						}}
					>
						{legalLinks.map((item) => (
							<li key={item}>
								<a
									href="#"
									className="hover:text-white transition-colors uppercase"
								>
									{item}
								</a>
							</li>
						))}
					</ul>

					<div className="flex items-center gap-4">
						{socials.map((s) => (
							<a
								key={s.name}
								href="#"
								aria-label={s.name}
								className="flex items-center justify-center rounded-full border border-white/40 hover:border-white transition-colors"
								style={{ width: "44px", height: "44px" }}
							>
								<img
									src={s.src}
									alt=""
									width={16}
									height={16}
									className="block"
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
