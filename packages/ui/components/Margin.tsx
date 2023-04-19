import { css } from "@emotion/react";

interface MarginProps {
	dir: "row" | "col";
	size: number;
}

export const Margin = ({ dir, size }: MarginProps) => {
	const style = css`
		display: block;
		width: ${dir === "row" ? `${size}px` : "100%"};
		height: ${dir === "col" ? `${size}px` : "100%"};
	`;

	return <div css={style} />;
};
