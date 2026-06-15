import { type CSSProperties, type RefObject, useEffect, useState } from "react";

const cache = new Map<string, Promise<string>>();

function fetchSvg(src: string): Promise<string> {
	let p = cache.get(src);
	if (!p) {
		p = fetch(src).then((r) => r.text());
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

	return (
		<div
			ref={(el) => {
				if (containerRef) containerRef.current = el;
				if (el && markup && onReady) onReady(el);
			}}
			aria-hidden={ariaHidden}
			className={className}
			style={style}
			{...(markup ? { dangerouslySetInnerHTML: { __html: markup } } : {})}
		/>
	);
}
