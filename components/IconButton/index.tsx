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
  let classes;
  switch (color) {
    case "secondaryContrast":
      classes = clsx(
        "text-secondary-contrast hover:text-gray-800 active:text-black fill-gray-900 hover:fill-gray-800 active:fill-black",
        className
      );
      break;
    case "primaryContrast":
    default:
      classes = clsx(
        "text-primary-contrast hover:text-gray-300 active:text-gray-400 fill-gray-100 hover:fill-gray-300 active:fill-gray-400",
        className
      );
      break;
  }

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
