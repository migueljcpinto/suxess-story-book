import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Avatar from "@/components/avatar/avatar";

const meta = {
	title: "Design System/Avatar",
	component: Avatar,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: "https://github.com/shadcn.png",
		alt: "Avatar default",
		fallback: "CN",
		size: "md",
	},
};

export const Small: Story = {
	args: {
		src: "https://github.com/shadcn.png",
		alt: "Avatar small",
		fallback: "CN",
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		src: "https://github.com/shadcn.png",
		alt: "Avatar large",
		fallback: "CN",
		size: "lg",
	},
};

export const WithFallback: Story = {
	args: {
		fallback: "CN",
		size: "md",
	},
};
