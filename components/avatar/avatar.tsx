import {
    AvatarImage,
    AvatarFallback,
    Avatar as DefaultAvatar,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva("", {
    variants: {
        size: {
            sm: "size-7",    // 28px
            md: "size-8",    // 32px 
            lg: "size-9",    // 36px
            xl: "size-10"    // 40px
        }
    },
    defaultVariants: {
        size: "md"
    }
});

type AvatarVariantProps = VariantProps<typeof avatarVariants>;
export type Size = AvatarVariantProps["size"];

type Props = {
    isOnline?: boolean;
    onClick?: () => void;
    disabled?: boolean;
} & AvatarVariantProps & {
    src?: string;
    alt?: string;
};

export default function Avatar({
    size,
    isOnline,
    src,
    alt,
    onClick,
    disabled = false
}: Props) {
    const getInitials = (name?: string) => {
        if (!name) return "U";
        return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    };

    return (
        <div className="relative inline-block size-fit">
            <DefaultAvatar
                className={cn(avatarVariants({ size }))}
                onClick={disabled ? undefined : onClick}
            >
                <AvatarImage
                    className="aspect-square size-full object-cover"
                    src={src}
                    alt={alt}
                />
                <AvatarFallback className="bg-muted text-muted-foreground font-medium">
                    {getInitials(alt)}
                </AvatarFallback>
            </DefaultAvatar>

            {isOnline && (
                <span
                    className={cn(
                        "absolute bottom-0 right-0 rounded-full border-2 border-background",
                        "bg-green-500 shadow-sm",
                        {
                            "size-2": size === "sm" || size === "md",
                            "size-3": size === "lg" || size === "xl"
                        }
                    )}
                    data-testid="presence-indicator"
                />
            )}
        </div>
    );
}