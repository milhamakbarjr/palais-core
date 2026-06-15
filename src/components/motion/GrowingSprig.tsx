import { useGSAP } from "@gsap/react";
import { type CSSProperties, useRef } from "react";

import { ensureGsap, gsap, ScrollTrigger } from "#/lib/motion/gsap";
import { useReducedMotion } from "#/lib/motion/useReducedMotion";

import { InlineSvg } from "./InlineSvg";

type Props = {
	src: string;
	className?: string;
	style?: CSSProperties;
	/** Stagger between each path's bloom (s). */
	stagger?: number;
	/** Bloom duration per path (s). */
	duration?: number;
	/** ScrollTrigger start position. */
	start?: string;
	/** Order of stagger across paths. */
	from?: "start" | "end" | "center" | "random";
};

export function GrowingSprig({
	src,
	className,
	style,
	stagger = 0.035,
	duration = 0.7,
	start = "top 85%",
	from = "random",
}: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const reduced = useReducedMotion();

	useGSAP(
		() => {
			if (reduced) return;
			ensureGsap();
			const el = ref.current;
			if (!el) return;

			const paths = el.querySelectorAll<SVGGraphicsElement>(
				"path, circle, ellipse, polygon, rect",
			);
			if (!paths.length) return;

			gsap.set(paths, {
				transformBox: "fill-box",
				transformOrigin: "center center",
				scale: 0,
				opacity: 0,
			});

			const tween = gsap.to(paths, {
				scale: 1,
				opacity: 1,
				duration,
				ease: "back.out(1.6)",
				stagger: { each: stagger, from },
				scrollTrigger: {
					trigger: el,
					start,
					once: true,
				},
			});

			return () => {
				tween.scrollTrigger?.kill();
				tween.kill();
			};
		},
		{
			scope: ref,
			dependencies: [src, reduced, stagger, duration, start, from],
		},
	);

	// SSR/reduced-motion fallback: render full opacity immediately.
	const fallbackKey = reduced ? "reduced" : "anim";

	return (
		<InlineSvg
			key={fallbackKey}
			src={src}
			containerRef={ref}
			className={className}
			style={style}
			onReady={() => {
				// Ensure ScrollTrigger sees correct positions after async SVG injection.
				if (!reduced) ScrollTrigger.refresh();
			}}
		/>
	);
}
