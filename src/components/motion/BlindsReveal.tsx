import { useGSAP } from "@gsap/react";
import { type ReactNode, useRef } from "react";

import { ensureGsap, gsap } from "#/lib/motion/gsap";
import { useReducedMotion } from "#/lib/motion/useReducedMotion";

type Props = {
	children: ReactNode;
	/** Color of the covering strips (e.g. the section background). */
	color: string;
	/** Number of horizontal strips. More = finer letterpress feel. */
	strips?: number;
	/** Per-strip travel duration (s). */
	duration?: number;
	/** Stagger between strips (s) — from center outward. */
	stagger?: number;
	className?: string;
};

export function BlindsReveal({
	children,
	color,
	strips = 9,
	duration = 0.7,
	stagger = 0.06,
	className,
}: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const reduced = useReducedMotion();

	useGSAP(
		() => {
			if (reduced) return;
			ensureGsap();
			const el = ref.current;
			if (!el) return;
			const strips = el.querySelectorAll<HTMLElement>("[data-blind]");
			if (!strips.length) return;

			gsap.set(strips, { xPercent: 0 });

			const tween = gsap.to(strips, {
				// Alternate strips slide left vs. right off-screen.
				xPercent: (i) => (i % 2 === 0 ? -101 : 101),
				duration,
				ease: "power4.inOut",
				stagger: { each: stagger, from: "center" },
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
					once: true,
				},
			});

			return () => {
				tween.scrollTrigger?.kill();
				tween.kill();
			};
		},
		{ scope: ref, dependencies: [reduced, strips, duration, stagger] },
	);

	const stripArray = Array.from({ length: strips });

	return (
		<div ref={ref} className={`relative ${className ?? ""}`}>
			{children}
			{!reduced && (
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 overflow-hidden"
				>
					{stripArray.map((_, i) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: static count
							key={i}
							data-blind
							className="absolute left-0 w-full"
							style={{
								top: `${(i * 100) / strips}%`,
								height: `${100 / strips + 0.5}%`,
								background: color,
							}}
						/>
					))}
				</div>
			)}
		</div>
	);
}
