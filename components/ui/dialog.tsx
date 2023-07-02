import * as DialogPrimitive from "@radix-ui/react-dialog";

import onComponent from "./component-wrapper";

const defaultClasses = {
  overlay:
    "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  content:
    "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
  header: "flex flex-col space-y-1.5 text-center sm:text-left",
  footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
  title: "text-lg font-semibold leading-none tracking-tight",
  description: "text-sm text-muted-foreground",
};

const { Root, Trigger, Portal, Overlay, Content, Title, Description } =
  DialogPrimitive;

const Dialog = {
  Root,
  Trigger,
  Portal,
  Overlay: onComponent(Overlay, defaultClasses.overlay, "DialogOverlay"),
  Content: onComponent(Content, defaultClasses.content, "DialogContent"),
  Header: onComponent("div", defaultClasses.header),
  Footer: onComponent("div", defaultClasses.footer),
  Title: onComponent(Title, defaultClasses.title, "DialogTitle"),
  Description: onComponent(
    Description,
    defaultClasses.description,
    "DialogDescription"
  ),
};

export { Dialog };
