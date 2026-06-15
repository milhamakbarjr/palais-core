import { Pill } from "../ui/Pill";

const navLinks = [
	{ label: "GET INSPIRED", href: "#inspired" },
	{ label: "OUR PRODUCTS", href: "#products" },
	{ label: "FOR A BETTER WORLD", href: "#world" },
	{ label: "CONTACT", href: "#contact" },
];

export default function Header() {
	return (
		<header className="w-full relative bg-white">
			{/* Top utility row */}
			<div className="w-full border-b border-cobalt/10">
				<div className="max-w-[1173px] mx-auto flex items-center justify-end gap-5 h-[35px] px-6">
					<a
						href="#pro"
						className="text-cobalt text-[12px] uppercase tracking-[1.6px]"
						style={{ fontFamily: "var(--font-ui)" }}
					>
						For Professionals
					</a>
					<img
						src="/assets/HeroSection/top-bar-divider-1.svg"
						alt=""
						className="h-[14px] w-px opacity-60"
					/>
					<button
						type="button"
						className="flex items-center gap-2 text-cobalt text-[12px] uppercase tracking-[1.6px]"
						style={{ fontFamily: "var(--font-ui)" }}
					>
						<span>EN</span>
						<img
							src="/assets/HeroSection/Arrow-lang.svg"
							alt=""
							className="h-[8px] w-auto"
						/>
					</button>
				</div>
			</div>

			{/* Main nav row */}
			<div className="w-full">
				<div className="max-w-[1173px] mx-auto flex items-center justify-between h-[96px] px-6">
					<a href="/" aria-label="Pa'lais home" className="shrink-0">
						<img
							src="/assets/Brand/brand-logo-positive.svg"
							alt="Pa'lais"
							width={164}
							height={75}
							className="h-[75px] w-[164px]"
						/>
					</a>

					<nav className="flex items-center gap-10">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-cobalt text-[12px] uppercase tracking-[1.6px] hover:opacity-70 transition-opacity"
								style={{ fontFamily: "var(--font-ui)" }}
							>
								{link.label}
							</a>
						))}
					</nav>

					<Pill variant="cobalt" href="#store-locator" className="!px-7 !py-4">
						Store Locator
					</Pill>
				</div>
			</div>
		</header>
	);
}
