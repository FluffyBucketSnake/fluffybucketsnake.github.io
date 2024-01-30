import CloseIcon from "@fluentui/svg-icons/icons/dismiss_24_regular.svg";
import { Dialog as HDialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import IconButton from "components/IconButton";
import React, { ElementType, FC, Fragment, ReactNode } from "react";

export type DrawerProps = {
  as?: ElementType<any>;
  children?: ReactNode;
  className?: string;
  onClose: () => void;
  open?: boolean;
};

const Dialog: FC<DrawerProps> = ({
  as,
  children,
  className,
  onClose,
  open,
}) => {
  return (
    <HDialog open={open} onClose={onClose}>
      <HDialog.Panel
        as={as}
        className={clsx(
          className,
          "fixed inset-0 z-50 bg-bg-paper w-screen h-svh flex flex-col",
        )}
      >
        <header className="flex-0 flex shadow-lg p-4 bg-bg-paper">
          <IconButton className="ml-auto" onClick={onClose}>
            <CloseIcon width={24} height={24} />
          </IconButton>
        </header>
        <main className="flex-1 p-8 flex flex-col gap-4 overflow-y-auto">
          {children}
        </main>
      </HDialog.Panel>
    </HDialog>
  );
};

export default Dialog;
