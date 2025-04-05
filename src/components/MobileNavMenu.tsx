import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const MobileNavMenu = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div
        className="md:hidden flex items-center justify-center w-12 h-12 ml-4 rounded-full bg-background-offset text-primary-foreground border border-border hover:bg-muted duration-300"
        onClick={() => setOpenNav(!openNav)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
          />
        </svg>
      </div>
      {openNav && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-40 bg-background backdrop-blur p-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            // variants={overlayVariants}
            // onClick={() => setIsOpen(false)}
          >
            <motion.div className="flex items-center justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                className="cursor-pointer"
                onClick={() => setOpenNav(false)}
              >
                <path
                  fill="currentColor"
                  d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                />
              </svg>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default MobileNavMenu;
