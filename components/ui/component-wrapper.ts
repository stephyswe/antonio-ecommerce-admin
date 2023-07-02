import * as React from "react";

import { cn } from "@/lib/utils";

type ComponentOrElement =
  | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

interface ComponentProps extends React.ComponentProps<any> {
  className?: string;
}

function onComponent<P extends ComponentProps>(
  component: ComponentOrElement,
  defaultClassName: string,
  displayName?: string
) {
  const ForwardedComponent = React.forwardRef<unknown, P>(
    ({ className, ...props }, ref) =>
      React.createElement(component as string | React.ComponentType<any>, {
        ref,
        className: cn(defaultClassName, className),
        ...props,
      })
  );

  ForwardedComponent.displayName = displayName;

  return ForwardedComponent;
}

export default onComponent;
