import { useEffect } from "react";

import { useReducedMotion } from "#/lib/motion/useReducedMotion";

const PREVIOUS_LAG_THRESHOLD = 500;
const PREVIOUS_LAG_ADJUSTED = 33;

export function SmoothScroll() {
	const reduced = useReducedMotion();

	useEffect(() => {
		if (typeof window === "undefined" || reduced) return;

		let disposed = false;
		// Track of teardowns to run on cleanup. Filled once the dynamic imports
		// resolve. Storing as a list keeps the cleanup function synchronous
		// even though setup is async.
		const teardowns: Array<() => void> = [];

		(async () => {
			const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
				import("lenis"),
				import("gsap"),
				import("gsap/ScrollTrigger"),
			]);
			if (disposed) return;

			gsap.registerPlugin(ScrollTrigger);

			const lenis = new Lenis({
				duration: 1.1,
				easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
				smoothWheel: true,
			});

			const onScroll = () => ScrollTrigger.update();
			lenis.on("scroll", onScroll);

			const tickerCb = (time: number) => lenis.raf(time * 1000);
			gsap.ticker.add(tickerCb);
			gsap.ticker.lagSmoothing(0);

			teardowns.push(() => {
				lenis.off("scroll", onScroll);
				gsap.ticker.remove(tickerCb);
				gsap.ticker.lagSmoothing(PREVIOUS_LAG_THRESHOLD, PREVIOUS_LAG_ADJUSTED);
				lenis.destroy();
			});
		})();

		return () => {
			disposed = true;
			for (const t of teardowns) t();
		};
	}, [reduced]);

	return null;
}
