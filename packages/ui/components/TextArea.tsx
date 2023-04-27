import React, { TextareaHTMLAttributes } from "react";
import classnames from "classnames";
import "../scss/textArea.scss";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	row: 3 | 5 | 7 | 9;
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(props, ref) => {
		const { row, className, ...rest } = props;

		return (
			<div className={classnames("text-area-container", className)}>
				<textarea
					{...rest}
					ref={ref}
					rows={row}
					className={classnames("text-area")}
				/>
			</div>
		);
	}
);
