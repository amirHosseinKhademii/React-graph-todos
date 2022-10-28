import { ComponentProps } from "react";

export type TIcon = ComponentProps<"svg">;

export const Icon = ({ className, children, ...rest }: TIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...{ className, ...rest }}
    >
      {children}
    </svg>
  );
};
