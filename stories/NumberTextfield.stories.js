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
	))
	.add("with initial number", () => (
		<NumberTextfield
			number={ 123.99 }
			didChangeNumber={(number) => {
				console.log(number);
			}}
		/>
	));