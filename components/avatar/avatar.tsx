import { Avatar as DefaultAvatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface AvatarProps {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
    fallbackClassName?: string;
    imageClassName?: string;
}

const sizeClasses = {
    sm: "size-6",
    md: "size-8",
    lg: "size-12",
    xl: "size-16",
};

const fallbackSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
};

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
    ({
        src,
        alt,
        fallback = "U",
        size = "md",
        className,
        fallbackClassName,
        imageClassName
    }, ref) => {
        return (
            <DefaultAvatar
                ref={ref}
                className={cn(sizeClasses[size], className)}
            >
                {src && (
                    <AvatarImage
                        src={src}
                        alt={alt}
                        className={imageClassName}
                    />
                )}
                <AvatarFallback
                    className={cn(
                        fallbackSizeClasses[size],
                        fallbackClassName
                    )}
                >
                    {fallback}
                </AvatarFallback>
            </DefaultAvatar>
        );
    }
);

Avatar.displayName = "Avatar";

export default Avatar;