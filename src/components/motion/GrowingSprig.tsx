import { useGSAP } from "@gsap/react";
import { type CSSProperties, useRef, useState } from "react";

import { ensureGsap, gsap } from "#/lib/motion/gsap";
import { useReducedMotion } from "#/lib/motion/useReducedMotion";

import { InlineSvg } from "./InlineSvg";

// Inline SVGs need the inner <svg> to fill the wrapper, since InlineSvg renders
// the markup unchanged from the source file (which usually carries its own
// fixed width/height attrs). Apply at the wrapper level so every call site gets
// it for free.
const DEFAULT_SVG_FIT = "[&_svg]:h-auto [&_svg]:w-full";

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
	// Tracks whether the async InlineSvg fetch has injected markup. useGSAP can
	// only safely query <path> elements once this flips to true — otherwise the
	// effect runs on mount with zero paths in the DOM and the tween silently
	// no-ops (this was the race fix from review).
	const [ready, setReady] = useState(false);

	useGSAP(
		() => {
			if (reduced || !ready) return;
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
			dependencies: [ready, reduced, src, stagger, duration, start, from],
		},
	);

	const mergedClassName = className
		? `${DEFAULT_SVG_FIT} ${className}`
		: DEFAULT_SVG_FIT;

	return (
		<InlineSvg
			// Remount cleanly when reduced-motion preference flips so any stale
			// gsap.set transforms on inner paths are dropped with the old element.
			key={reduced ? "reduced" : "anim"}
			src={src}
			containerRef={ref}
			className={mergedClassName}
			style={style}
			onReady={() => setReady(true)}
		/>
	);
}
