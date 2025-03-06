import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground rounded-full shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  htmlType?: "button" | "link";
  href?: LinkProps["href"];
  target?: string;
  icon?: ReactNode; // Supports ReactNode or Next.js Image
  iconPosition?: "start" | "end"; // Restrict to "start" or "end"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      className,
      href,
      htmlType = "button",
      size,
      target,
      variant,
      icon,
      iconPosition = "start",
      children,
      ...props
    },
    ref
  ) => {
    if (htmlType === "link" && href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
          target={target}
        >
          {icon && iconPosition === "start" && (
            <span className="icon-start">{icon}</span>
          )}
          {children}
          {icon && iconPosition === "end" && (
            <span className="icon-end">{icon}</span>
          )}
        </Link>
      );
    }

    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {icon && iconPosition === "start" && (
          <span className="icon-start">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "end" && (
          <span className="icon-end">{icon}</span>
        )}
      </Component>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
