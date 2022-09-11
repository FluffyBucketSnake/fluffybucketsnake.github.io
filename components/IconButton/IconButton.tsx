import clsx from "clsx";
import React, {
  FC,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
  RefObject,
} from "react";

export type IconButtonColor =
  | "primary"
  | "primaryContrast"
  | "secondaryContrast";
export type IconButtonVariant = "text" | "filled";

export type BaseIconButtonProps = {
  children?: ReactNode;
  className?: string;
  color?: IconButtonColor;
  fluent?: boolean;
  packed?: boolean;
  variant?: IconButtonVariant;
};

export type AnchorIconButtonProps = {
  href: string;
  rel?: string;
  target?: HTMLAttributeAnchorTarget;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export type ButtonIconButtonProps = {
  href?: undefined;
  rel?: undefined;
  target?: undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type IconButtonProps = BaseIconButtonProps &
  (AnchorIconButtonProps | ButtonIconButtonProps);

const IconButton = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  IconButtonProps
>(
  (
    {
      children,
      className,
      color,
      fluent,
      href,
      rel,
      onClick,
      packed,
      target,
      variant,
    },
    ref
  ) => {
    const classes = computeClasses(variant, color, fluent, packed, className);

    return href ? (
      <a
        ref={ref as RefObject<HTMLAnchorElement>}
        className={classes}
        {...{ href, rel, target }}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    ) : (
      <button
        ref={ref as RefObject<HTMLButtonElement>}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      >
        {children}
      </button>
    );
  }
);

export default IconButton;

function computeClasses(
  variant?: IconButtonVariant,
  color?: IconButtonColor,
  fluent?: boolean,
  packed: boolean = false,
  className?: string
) {
  return clsx(
    "flex transition duration-200 rounded-full",
    computeColorClasses(variant, color, fluent),
    !packed && "p-[12px]",
    className
  );
}

function computeColorClasses(
  variant: IconButtonVariant = "text",
  color: IconButtonColor = "primaryContrast",
  fluent: boolean = false
) {
  if (variant === "filled" && color === "primary" && fluent) {
    return "bg-primary-500/80 hover:bg-primary-500/90 active:bg-primary-500/70 shadow-lg backdrop-blur-lg border-1 border-primary-500 text-primary-contrast hover:text-primary-contrast/60 active:text-primary-contrast/30 fill-primary-contrast hover:fill-primary-contrast/60 active:fill-primary-contrast/30";
  }
  if (variant === "text" && color === "primaryContrast") {
    return "text-primary-contrast hover:text-primary-contrast/60 active:text-primary-contrast/30 fill-primary-contrast hover:fill-primary-contrast/60 active:fill-primary-contrast/30";
  }
  if (variant === "text" && color === "secondaryContrast") {
    return "text-secondary-contrast hover:text-secondary-contrast/80 active:text-secondary-contrast/60 fill-secondary-contrast hover:secondary-contrast/80 active:fill-secondary-contrast/60";
  }
  throw new Error(
    `Unimplemented style combination: (${variant}, ${color}, ${fluent})`
  );
}
