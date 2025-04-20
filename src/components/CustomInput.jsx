import React, { forwardRef } from "react";
import clsx from "clsx";

const CustomInput = forwardRef(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(
        "rounded-md p-2 border border-border focus:outline-1 focus:outline-primary-offset",
        className
      )}
      {...rest}
    />
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
