import clsx from "clsx";
import { ComponentProps, FC } from "react";

export type Size = 'md' | 'lg';

export type Props = { size?: Size } & ComponentProps<'button'>;

const DefaultClassNames = "rounded bg-primary-500 flex justify-center text-text-primary";

const Button: FC<Props> = ({ className, size, ...props }) => {
  return (<button className={clsx(DefaultClassNames, getClassesForSize(size), className)} {...props} />)
}

function getClassesForSize(size: Size = "md"): ComponentProps<'button'>['className'] {
  switch (size) {
    case "lg":
      return "px-6 py-3 text-xl";
    case "md":
      return "px-4 py-2";
  }
}

export default Button;
