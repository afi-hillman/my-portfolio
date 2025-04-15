import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "./NavMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [menuOrigin, setMenuOrigin] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [rotate, setRotate] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Calculate distance to furthest corner for proper scaling
  const calculateScale = () => {
    if (!buttonRef.current) return 1;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    const topLeft = Math.hypot(buttonX, buttonY);
    const topRight = Math.hypot(dimensions.width - buttonX, buttonY);
    const bottomLeft = Math.hypot(buttonX, dimensions.height - buttonY);
    const bottomRight = Math.hypot(
      dimensions.width - buttonX,
      dimensions.height - buttonY
    );

    // Get max distance and calculate scale factor
    const maxDistance = Math.max(topLeft, topRight, bottomLeft, bottomRight);
    return (maxDistance / 20) * 2;
  };

  const toggleMenu = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setRotate((prev) => prev + 360);
    setIsOpen(!isOpen);
  };

  const isCurrentPage = (href: string) => {
    if (href === "/" && pathname === "/") {
      return true;
    }
    if (href !== "/" && pathname.startsWith(href)) {
      return true;
    }
    return false;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0,
      },
    },
  };

  const navItemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        ref={buttonRef}
        className="md:hidden flex items-center justify-center w-12 h-12 ml-4 rounded-full bg-background-offset text-primary-foreground border border-border hover:bg-muted duration-300 cursor-pointer"
        onClick={toggleMenu}
        animate={{ rotate }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d={
              isOpen
                ? "m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                : "M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
            }
          />
        </svg>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed z-40 rounded-full bg-background-offset transform origin-center"
              style={{
                top: menuOrigin.y - 20,
                left: menuOrigin.x - 20,
                width: 40,
                height: 40,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: calculateScale() }}
              exit={{ scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 25,
              }}
            />
            <motion.div
              className="fixed inset-0 z-40 flex flex-col"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="flex items-center justify-end cursor-pointer mr-4 mt-4 self-end"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 1 }}
                animate={{ rotate: 90, opacity: 1 }}
                exit={{ opacity: 1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                  />
                </svg>
              </motion.div>
              <motion.div
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-6 p-20"
              >
                {navItems.map((item, index) => {
                  const active = isCurrentPage(item.href);
                  return (
                    <motion.div key={index} variants={navItemVariants}>
                      <Link
                        href={item.disabled ? "#" : item.href}
                        onClick={(e) => {
                          if (item.disabled) {
                            e.preventDefault();
                          } else {
                            setIsOpen(false);
                          }
                        }}
                        className={`relative group flex items-center text-nowrap ${
                          item.disabled
                            ? "text-muted line-through decoration-red-500"
                            : ""
                        }`}
                      >
                        <h2>
                          {item.prefix} {item.label}
                        </h2>
                        {active && (
                          <motion.div
                            className="absolute -bottom-2 -left-3/4 h-1.5 bg-primary"
                            initial="hidden"
                            animate="visible"
                            variants={underlineVariants}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavMenu;
