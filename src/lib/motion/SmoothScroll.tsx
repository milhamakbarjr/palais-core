import Lenis from "lenis";
import { useEffect } from "react";

import { ensureGsap, gsap, ScrollTrigger } from "./gsap";

export function SmoothScroll() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		ensureGsap();

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

		return () => {
			lenis.off("scroll", onScroll);
			gsap.ticker.remove(tickerCb);
			lenis.destroy();
		};
	}, []);

	return null;
}
