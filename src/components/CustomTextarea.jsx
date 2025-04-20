import React, { forwardRef } from "react";
import clsx from "clsx";

const CustomTextarea = forwardRef(({ className, ...rest }, ref) => {
  return (
    <textarea
      ref={ref}
      className={clsx(
        "rounded-md p-2 border border-border focus:outline-1 focus:outline-primary-offset",
        className
      )}
      rows={6}
      {...rest}
    />
  );
});

CustomTextarea.displayName = "CustomTextarea";

export default CustomTextarea;
