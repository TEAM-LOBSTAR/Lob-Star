import React, { InputHTMLAttributes } from "react";
import classnames from "classnames";
import { css } from "@emotion/react";
import "../scss/textInput.scss";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	error?: string;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	(props, ref) => {
		const { label, error, className, ...rest } = props;
		return (
			<div className={classnames("text-input-container", className)}>
				{label && (
					<label className="text-input-label" htmlFor={rest.id || rest.name}>
						{label}
					</label>
				)}
				<input
					{...rest}
					ref={ref}
					className={classnames("text-input", {
						"text-input--error": Boolean(error),
					})}
				/>
				{error && (
					<span className="text-input-error" role="alert">
						{error}
					</span>
				)}
			</div>
		);
	}
);
