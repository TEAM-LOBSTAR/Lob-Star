import React from "react";
import classnames from "classnames";
import { css } from "@emotion/react";
import "../scss/button.scss";

type ButtonProps = {
	variant?: "primary" | "secondary" | "danger"; // variant prop 타입 정의
	disabled?: boolean;
	className?: string;
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLElement>;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			variant = "primary",
			disabled = false,
			className,
			children,
			onClick,
			...rest
		} = props;

		return (
			<button
				ref={ref}
				{...rest}
				onClick={onClick}
				disabled={disabled}
				className={classnames("button", `button--${variant}`, className)}
				css={css`
					&:disabled {
						opacity: 0.5;
						cursor: not-allowed;
					}
				`}
			>
				{children}
			</button>
		);
	}
);
