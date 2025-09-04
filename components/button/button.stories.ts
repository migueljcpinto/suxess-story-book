import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "@/components/button/button";

const meta = {
	title: "Design System/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Button",
		variant: "default",
		size: "md",
	},
};

export const Small: Story = {
	args: {
		children: "Small Button",
		variant: "default",
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		children: "Large Button",
		variant: "default",
		size: "lg",
	},
};

export const Destructive: Story = {
	args: {
		children: "Delete",
		variant: "destructive",
		size: "md",
	},
};

export const Outline: Story = {
	args: {
		children: "Outline Button",
		variant: "outline",
		size: "md",
	},
};

export const Secondary: Story = {
	args: {
		children: "Secondary Button",
		variant: "secondary",
		size: "md",
	},
};

export const Ghost: Story = {
	args: {
		children: "Ghost Button",
		variant: "ghost",
		size: "md",
	},
};

export const Link: Story = {
	args: {
		children: "Link Button",
		variant: "link",
		size: "md",
	},
};

export const Success: Story = {
	args: {
		children: "Success",
		variant: "success",
		size: "md",
	},
};

export const Warning: Story = {
	args: {
		children: "Warning",
		variant: "warning",
		size: "md",
	},
};

export const Loading: Story = {
	args: {
		children: "Loading...",
		loading: true,
		size: "md",
	},
};

export const Disabled: Story = {
	args: {
		children: "Disabled Button",
		disabled: true,
		size: "md",
	},
};

export const WithIcon: Story = {
	args: {
		children: "With Icon",
		leftIcon: "🚀",
		size: "md",
	},
};
