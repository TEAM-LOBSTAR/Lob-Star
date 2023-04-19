import { css } from "@emotion/react";

type MarginProps = {
	dir: "row" | "col";
	size: number;
};

export const Margin = ({ dir, size }: MarginProps) => {
	return (
		<div
			css={css`
				display: block;
				width: ${dir === "row" ? `${size}px` : "100%"};
				height: ${dir === "col" ? `${size}px` : "100%"};
			`}
		/>
	);
};
