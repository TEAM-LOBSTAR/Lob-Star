import React from "react";
import { css } from "@emotion/react";

type FlexProps = {
	direction?: "row" | "column";
	justify?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	alignItems?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
	alignContent?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "stretch";
	wrap?: "wrap" | "nowrap" | "wrap-reverse";
	gap?: number;
	className?: string;
	children: React.ReactNode;
};

export const Flex = ({
	direction = "row",
	justify = "flex-start",
	alignItems = "flex-start",
	alignContent,
	wrap = "nowrap",
	gap = 0,
	children,
}: FlexProps) => {
	return (
		<div
			css={css`
				display: flex;
				flex-direction: ${direction};
				justify-content: ${justify};
				align-items: ${alignItems};
				align-content: ${alignContent};
				flex-wrap: ${wrap};
				gap: ${gap}px;
			`}
		>
			{children}
		</div>
	);
};
