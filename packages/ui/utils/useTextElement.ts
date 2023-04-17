import { TextProps } from "../components/Text";

export function useTextElement(
	variant: TextProps["variant"],
	children: React.ReactNode
) {
	switch (variant) {
		case "h1":
			return "h1";
		case "h2":
			return "h2";
		case "h3":
			return "h3";
		case "body1":
			if (typeof children === "string" && children.includes("\n")) {
				return "p";
			}
			return "span";
		default:
			return "span";
	}
}
