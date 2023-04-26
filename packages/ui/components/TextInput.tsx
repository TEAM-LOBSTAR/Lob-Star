import React, { InputHTMLAttributes } from "react";
import classnames from "classnames";
import "../scss/textInput.scss";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	error?: string;
	type?: "text" | "required" | "password";
	required?: boolean;
	disabled?: boolean;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	(props, ref) => {
		const {
			label,
			error,
			className,
			type = "text",
			required = false,
			disabled,
			...rest
		} = props;
		return (
			<div
				className={classnames("text-input-container", className, {
					"text-input-container--disabled": disabled,
				})}
			>
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
						"text-input--required": Boolean(required),
						"text-input--password": type === "password",
					})}
					type={type} // type이 "password"인 경우 "password" 타입을, 그 외의 경우 "text" 타입을 사용
					disabled={disabled} // disabled 속성이 true인 경우 TextInput 비활성화
				/>
				{error && (
					<span className="text-input-error-message" role="alert">
						{error}
					</span>
				)}
			</div>
		);
	}
);
