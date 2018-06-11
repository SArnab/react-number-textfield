import { configure } from "@storybook/react";

function loadStories() {
	require("../stories/NumberTextfield.stories.js");
}

configure(loadStories, module);
