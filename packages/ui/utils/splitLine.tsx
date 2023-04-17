import React from "react";

function splitLine(string: string) {
	return string.split("\n").map((string, index) => (
		<React.Fragment key={index}>
			{index > 0 && <br />}
			{string}
		</React.Fragment>
	));
}

export default splitLine;
