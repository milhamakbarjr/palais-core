import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
	const mql = window.matchMedia(QUERY);
	mql.addEventListener("change", callback);
	return () => mql.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
	return window.matchMedia(QUERY).matches;
}

// Default to reduced=true on the server: we can't know the user's preference,
// so the safe choice is "no animations" until the client confirms otherwise.
// This also matches SSR markup to the static fallback, avoiding a flash of
// scale:0/opacity:0 paths for users who actually prefer reduced motion.
function getServerSnapshot(): boolean {
	return true;
}

export function useReducedMotion(): boolean {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
