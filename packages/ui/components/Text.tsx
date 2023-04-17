import React from "react";
import classnames from "classnames";
import { css } from "@emotion/react";
import { useTextElement } from "../utils/useTextElement";
import { splitLine } from "../utils/splitLine";
import "../scss/text.scss";

export type TextProps = {
	variant?: "h1" | "h2" | "h3" | "body1"; // variant prop 타입 정의
	weight?: "Normal" | "SemiBold" | "Bold"; // weight prop 타입 정의
	color?: string;
	className?: string;
	children: React.ReactNode;
};

export const Text = React.forwardRef<HTMLElement, TextProps>((props, ref) => {
	const {
		variant = "body1",
		weight = "Normal",
		color,
		className,
		children,
		...rest
	} = props;

	// variant 값에 따라 element 선택
	// default는 span
	const TagName = useTextElement(variant, children);

	return (
		<TagName
			ref={ref}
			{...rest}
			className={classnames(
				"text",
				`text--${weight}`,
				`text--${variant}`,
				className
			)}
			css={css`
				color: ${color};
			`}
		>
			{TagName === "p" && typeof children === "string"
				? splitLine(children)
				: children}
		</TagName>
	);
});
