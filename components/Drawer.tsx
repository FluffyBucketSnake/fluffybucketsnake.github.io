import { Dialog, Transition } from "@headlessui/react";
import React, { ElementType, FC, Fragment, ReactNode } from "react";

export type DrawerProps = {
  as?: ElementType<any>;
  children?: ReactNode;
  className?: string;
  onClose: () => void;
  open?: boolean;
};

const Drawer: FC<DrawerProps> = ({
  as,
  children,
  className,
  onClose,
  open,
}) => {
  return (
    <Transition as={Fragment} show={open ?? false}>
      <Dialog onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="transition duration-200"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-200"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-full"
        >
          <Dialog.Panel as={as} className={className}>
            {children}
          </Dialog.Panel>
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-1000"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
