import { type CSSProperties, type RefObject, useEffect, useState } from "react";

const cache = new Map<string, Promise<string>>();

function fetchSvg(src: string): Promise<string> {
	let p = cache.get(src);
	if (!p) {
		p = fetch(src)
			.then((r) => {
				if (!r.ok) throw new Error(`SVG fetch failed: ${r.status} ${src}`);
				return r.text();
			})
			.catch((err) => {
				// Don't poison the cache with a rejected promise — let the next mount retry.
				cache.delete(src);
				throw err;
			});
		cache.set(src, p);
	}
	return p;
}

// SECURITY: `src` must be a trusted first-party asset path (e.g. /assets/...).
// Markup is fetched and injected verbatim via dangerouslySetInnerHTML to expose
// inner <path> nodes for GSAP. Never pass a user-controlled URL here.
type Props = {
	src: string;
	className?: string;
	style?: CSSProperties;
	ariaHidden?: boolean;
	containerRef?: RefObject<HTMLDivElement | null>;
	/** Fires once after the SVG markup is injected into the DOM. */
	onReady?: (root: HTMLDivElement) => void;
};

export function InlineSvg({
	src,
	className,
	style,
	ariaHidden = true,
	containerRef,
	onReady,
}: Props) {
	const [markup, setMarkup] = useState<string | null>(null);

	useEffect(() => {
		let cancelled = false;
		fetchSvg(src).then((text) => {
			if (!cancelled) setMarkup(text);
		});
		return () => {
			cancelled = true;
		};
	}, [src]);

	// Fire onReady exactly once after markup is committed to the DOM, not on
	// every re-render or during the ref-callback's render phase.
	useEffect(() => {
		if (!markup || !onReady) return;
		const el = containerRef?.current;
		if (el) onReady(el);
	}, [markup, onReady, containerRef]);

	return (
		<div
			ref={(el) => {
				if (containerRef) containerRef.current = el;
			}}
			aria-hidden={ariaHidden}
			className={className}
			style={style}
			{...(markup ? { dangerouslySetInnerHTML: { __html: markup } } : {})}
		/>
	);
}
