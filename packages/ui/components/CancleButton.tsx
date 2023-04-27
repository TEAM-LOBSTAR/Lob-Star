import React from "react";
import classnames from "classnames";
import "../scss/cancleButton.scss";

type CancelButtonProps = {
	size?: number;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const CancelButton = React.forwardRef<
	HTMLButtonElement,
	CancelButtonProps
>((props, ref) => {
	const { size = 16, onClick, ...rest } = props;

	return (
		<button
			ref={ref}
			{...rest}
			onClick={onClick}
			className={classnames("cancel-button")}
		>
			<svg width={size} height={size} viewBox="0 0 16 16" fill="none">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M15.1464 0.853553C15.3417 1.04882 15.3417 1.3654 15.1464 1.56066L1.56066 15.1464C1.3654 15.3417 1.04882 15.3417 0.853553 15.1464C0.658291 14.9512 0.658291 14.6346 0.853553 14.4393L14.4393 0.853553C14.6346 0.658291 14.9512 0.658291 15.1464 0.853553Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.853553 0.853553C1.04882 0.658291 1.3654 0.658291 1.56066 0.853553L15.1464 14.4393C15.3417 14.6346 15.3417 14.9512 15.1464 15.1464C14.9512 15.3417 14.6346 15.3417 14.4393 15.1464L0.853553 1.56066C0.658291 1.3654 0.658291 1.04882 0.853553 0.853553Z"
					fill="currentColor"
				/>
			</svg>
		</button>
	);
});
