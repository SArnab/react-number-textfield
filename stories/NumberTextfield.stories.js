import * as React from "react";
import { storiesOf } from "@storybook/react";
import NumberTextfield from "../src/NumberTextfield";

storiesOf("NumberTextfield", module)
	.add("default props", () => (
		<NumberTextfield
			didChangeNumber={(number) => {
				console.log(number);
			}}
		/>
	));