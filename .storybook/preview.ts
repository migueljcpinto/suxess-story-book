import type { Preview } from "@storybook/nextjs-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../app/globals.css";

const preview: Preview = {
	decorators: [
		withThemeByClassName({
			themes: {
				light: "light",
				dark: "dark",
			},
			defaultTheme: "light",
		}),
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			test: "todo",
		},
	},
};

export default preview;
