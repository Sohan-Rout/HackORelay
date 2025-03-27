"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const BackgroundBeamsWithCollision = ({ children, className }) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [beams, setBeams] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      generateBeams(window.innerWidth);
    };
    
    // Initialize with window dimensions
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const generateBeams = (windowWidth) => {
    const newBeams = [
      // Left-aligned comets
      {
        initialX: 50,
        translateX: 50,
        duration: 7,
        repeatDelay: 3,
        delay: 2,
        className: "h-16",
      },
      {
        initialX: 80,
        translateX: 80,
        duration: 7,
        repeatDelay: 3,
        delay: 4,
        className: "h-16",
      },
      // Center-aligned comets
      {
        initialX: windowWidth * 0.3,
        translateX: windowWidth * 0.3,
        duration: 5,
        repeatDelay: 7,
        className: "h-12",
      },
      {
        initialX: windowWidth * 0.4,
        translateX: windowWidth * 0.4,
        duration: 5,
        repeatDelay: 14,
        delay: 4,
        className: "h-14",
      },
      // Right-aligned comets
      {
        initialX: 600,
        translateX: 600,
        duration: 3,
        repeatDelay: 3,
        delay: 4,
        className: "h-20",
      },
      {
        initialX: 800,
        translateX: 800,
        duration: 11,
        repeatDelay: 2,
        className: "h-24",
      },
    ].map(beam => getBeamProperties(beam));
    
    setBeams(newBeams);
  };

  const getBeamProperties = (baseProps) => {
    if (isSmallScreen) {
      return {
        ...baseProps,
        initialX: baseProps.initialX * 0.4,
        translateX: baseProps.translateX * 0.4,
        duration: baseProps.duration * 0.6,
        repeatDelay: Math.max(baseProps.repeatDelay * 0.5, 1),
        className: cn(baseProps.className, "h-12"),
      };
    }
    return baseProps;
  };

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-screen w-screen bg-black relative flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {beams.map((beam, index) => (
        <CollisionMechanism
          key={`${beam.initialX}-${index}`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
          isSmallScreen={isSmallScreen}
        />
      ))}
      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-800 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef(
  ({ parentRef, containerRef, beamOptions = {}, isSmallScreen }, ref) => {
    const beamRef = useRef(null);
    const [collision, setCollision] = useState({
      detected: false,
      coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    // Safe window access
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    const adjustedInitialX = isSmallScreen 
      ? Math.min(beamOptions.initialX, windowWidth * 0.5)
      : beamOptions.initialX;

    const adjustedTranslateX = isSmallScreen
      ? Math.min(beamOptions.translateX, windowWidth * 0.5)
      : beamOptions.translateX;

    useEffect(() => {
      const checkCollision = () => {
        if (
          beamRef.current &&
          containerRef.current &&
          parentRef.current &&
          !cycleCollisionDetected
        ) {
          const beamRect = beamRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const parentRect = parentRef.current.getBoundingClientRect();

          if (beamRect.bottom >= containerRect.top) {
            const relativeX =
              beamRect.left - parentRect.left + beamRect.width / 2;
            const relativeY = beamRect.bottom - parentRect.top;

            setCollision({
              detected: true,
              coordinates: {
                x: relativeX,
                y: relativeY,
              },
            });
            setCycleCollisionDetected(true);
          }
        }
      };

      const animationInterval = setInterval(checkCollision, 50);
      return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef]);

    useEffect(() => {
      if (collision.detected && collision.coordinates) {
        setTimeout(() => {
          setCollision({ detected: false, coordinates: null });
          setCycleCollisionDetected(false);
        }, 2000);

        setTimeout(() => {
          setBeamKey((prevKey) => prevKey + 1);
        }, 2000);
      }
    }, [collision]);

    return (
      <>
        <motion.div
          key={beamKey}
          ref={beamRef}
          animate="animate"
          initial={{
            translateY: beamOptions.initialY || "-200px",
            translateX: adjustedInitialX || "0px",
            rotate: beamOptions.rotate || 0,
          }}
          variants={{
            animate: {
              translateY: beamOptions.translateY || "1800px",
              translateX: adjustedTranslateX || "0px",
              rotate: beamOptions.rotate || 0,
            },
          }}
          transition={{
            duration: beamOptions.duration || 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: beamOptions.delay || 0,
            repeatDelay: beamOptions.repeatDelay || 0,
          }}
          className={cn(
            "absolute left-0 top-20 m-auto w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
            beamOptions.className
          )}
        />
        <AnimatePresence>
          {collision.detected && collision.coordinates && (
            <Explosion
              key={`${collision.coordinates.x}-${collision.coordinates.y}`}
              className=""
              style={{
                left: `${collision.coordinates.x}px`,
                top: `${collision.coordinates.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </AnimatePresence>
      </>
    );
  }
);

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ className, style }) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div className={cn("absolute z-50 h-2 w-2", className)} style={style}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
        />
      ))}
    </div>
  );
};