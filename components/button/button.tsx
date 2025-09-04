import { Button as DefaultButton, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "success" | "warning";
    size?: "sm" | "md" | "lg" | "xl" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant,
        size,
        asChild = false,
        loading = false,
        leftIcon,
        rightIcon,
        children,
        disabled,
        ...props
    }, ref) => {
        const Comp = asChild ? DefaultButton : "button";
        const isDisabled = disabled || loading;

        const shadcnSize = size === "md" ? "default" : size === "xl" ? "lg" : size;

        const shadcnVariant = variant === "success" || variant === "warning" ? "default" : variant;

        const extraClasses = variant === "success" ? "bg-green-600 text-white shadow-xs hover:bg-green-700" :
            variant === "warning" ? "bg-yellow-600 text-white shadow-xs hover:bg-yellow-700" :
                size === "xl" ? "h-12 px-8 text-lg" : "";

        return (
            <Comp
                ref={ref}
                className={cn(
                    buttonVariants({ variant: shadcnVariant, size: shadcnSize }),
                    extraClasses,
                    className
                )}
                disabled={isDisabled}
                {...props}
            >
                {loading && (
                    <svg
                        className="animate-spin size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-label="Carregando"
                    >
                        <title>Carregando</title>
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                {!loading && leftIcon && leftIcon}
                {children}
                {!loading && rightIcon && rightIcon}
            </Comp>
        );
    }
);

Button.displayName = "Button";

export default Button;
