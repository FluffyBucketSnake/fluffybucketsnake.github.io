import clsx from "clsx";
import React, { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";

export type IconButtonColor = "primaryContrast" | "secondaryContrast";

export type BaseIconButtonProps = {
  className?: string;
  color?: IconButtonColor;
};

export type AnchorIconButtonProps = {
  href: string;
  rel?: string;
  target?: HTMLAttributeAnchorTarget;
};

export type ButtonIconButtonProps = {
  href?: undefined;
  rel?: undefined;
  target?: undefined;
};

export type IconButtonProps = BaseIconButtonProps &
  (AnchorIconButtonProps | ButtonIconButtonProps);

const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  color,
  href,
  rel,
  target,
}) => {
  let classes;
  switch (color) {
    case "secondaryContrast":
      classes = clsx(
        "text-gray-900 hover:text-gray-800 active:text-black fill-gray-900 hover:fill-gray-800 active:fill-black",
        className
      );
      break;
    case "primaryContrast":
    default:
      classes = clsx(
        "text-gray-100 hover:text-white active:text-gray-200 fill-gray-100 hover:fill-white active:fill-gray-200",
        className
      );
      break;
  }

  return href ? (
    <a href={href} rel={color} target={target} className={classes}>
      {children}
    </a>
  ) : (
    <button className={classes}>{children}</button>
  );
};

export default IconButton;
