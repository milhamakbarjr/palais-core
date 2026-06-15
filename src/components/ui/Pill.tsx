import type { ComponentProps, CSSProperties, ReactNode } from "react";

type Variant = "cobalt" | "orangeOutline" | "white";

type Props = ComponentProps<"a"> & {
	variant?: Variant;
	children: ReactNode;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
};

const COBALT = "#234386";
const ORANGE = "#F08D52";
const WHITE = "#FFFFFF";

const variantStyle: Record<Variant, CSSProperties> = {
	cobalt: { background: COBALT, color: WHITE },
	orangeOutline: {
		background: WHITE,
		color: ORANGE,
		border: `2px solid ${ORANGE}`,
	},
	white: { background: WHITE, color: COBALT },
};

export function Pill({
	variant = "cobalt",
	children,
	leftIcon,
	rightIcon,
	className = "",
	style,
	...rest
}: Props) {
	return (
		<a
			{...rest}
			style={{
				fontFamily: "var(--font-ui)",
				fontSize: 12,
				letterSpacing: "1.6px",
				textTransform: "uppercase",
				...variantStyle[variant],
				...style,
			}}
			className={`inline-flex items-center justify-center gap-3 rounded-full px-9 py-5 whitespace-nowrap ${className}`}
		>
			{leftIcon}
			<span>{children}</span>
			{rightIcon}
		</a>
	);
}

export default Pill;
