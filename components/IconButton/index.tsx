import clsx from "clsx";
import React, {
  FC,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
} from "react";

export type IconButtonColor = "primaryContrast" | "secondaryContrast";

export type BaseIconButtonProps = {
  children?: ReactNode;
  className?: string;
  color?: IconButtonColor;
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

const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  color,
  href,
  rel,
  onClick,
  target,
}) => {
  const classes = clsx(
    "transition duration-200",
    getClassesForIconButtonColor(color),
    className
  );

  return href ? (
    <a
      href={href}
      rel={rel}
      target={target}
      className={classes}
      onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
    >
      {children}
    </a>
  ) : (
    <button
      className={classes}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
    >
      {children}
    </button>
  );
};

export default IconButton;

function getClassesForIconButtonColor(color?: IconButtonColor) {
  switch (color) {
    case "secondaryContrast":
      return "text-secondary-contrast hover:text-secondary-contrast/80 active:text-secondary-contrast/60 fill-secondary-contrast hover:secondary-contrast/80 active:fill-secondary-contrast/60";
    case "primaryContrast":
    default:
      return "text-primary-contrast hover:text-primary-contrast/60 active:text-primary-contrast/30 fill-primary-contrast hover:fill-primary-contrast/60 active:fill-primary-contrast/30";
  }
}
