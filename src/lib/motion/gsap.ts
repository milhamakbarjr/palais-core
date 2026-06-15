import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ensureGsap() {
	if (registered || typeof window === "undefined") return;
	gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
	registered = true;
}

export { gsap, ScrollTrigger, MotionPathPlugin };
