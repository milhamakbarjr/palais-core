import { useGSAP } from "@gsap/react";
import { type CSSProperties, type ReactNode, useRef } from "react";

import { ensureGsap, gsap } from "#/lib/motion/gsap";
import { useReducedMotion } from "#/lib/motion/useReducedMotion";

type Props = {
	children: ReactNode;
	/** SVG path string in local pixel space. Element follows from path start to end. */
	path: string;
	/** ScrollTrigger element selector or the wrapper itself if omitted. */
	triggerSelector?: string;
	/** Scroll range start (ScrollTrigger syntax). */
	start?: string;
	/** Scroll range end. */
	end?: string;
	/** Tilt the element along the curve angle. */
	autoRotate?: boolean;
	/** Optional extra rotation added to autoRotate angle. */
	rotateOffset?: number;
	className?: string;
	style?: CSSProperties;
};

export function PathFollower({
	children,
	path,
	triggerSelector,
	start = "top bottom",
	end = "bottom 70%",
	autoRotate = false,
	rotateOffset = 0,
	className,
	style,
}: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const reduced = useReducedMotion();

	useGSAP(
		() => {
			if (reduced) return;
			ensureGsap();
			const el = ref.current;
			if (!el) return;
			const trigger = triggerSelector
				? (document.querySelector(triggerSelector) as HTMLElement | null)
				: el.parentElement;
			if (!trigger) return;

			const tween = gsap.to(el, {
				motionPath: {
					path,
					autoRotate: autoRotate ? rotateOffset : false,
					alignOrigin: [0.5, 0.5],
				},
				ease: "none",
				scrollTrigger: {
					trigger,
					start,
					end,
					scrub: 0.6,
					invalidateOnRefresh: true,
				},
			});

			return () => {
				tween.scrollTrigger?.kill();
				tween.kill();
			};
		},
		{ scope: ref, dependencies: [path, reduced, triggerSelector, start, end] },
	);

	return (
		<div ref={ref} className={className} style={style}>
			{children}
		</div>
	);
}
