import React from "react";
import classnames from "classnames";
import { Text, Flex } from "..";

import "../scss/modal.scss";

type ModalProps = {
	open: boolean;
	modalTitle?: string;
	onClose: () => void;
	children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
	open,
	modalTitle,
	onClose,
	children,
}) => {
	return (
		<div
			className={classnames("modal-wrapper", {
				visible: open,
				hidden: !open,
			})}
			onClick={onClose}
		>
			<div
				className={classnames("modal-content")}
				onClick={(e) => e.stopPropagation()}
			>
				{modalTitle && <Text variant="h2">{modalTitle}</Text>}
				{children}
			</div>
		</div>
	);
};
