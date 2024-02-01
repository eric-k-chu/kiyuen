"use client";

/*
Credits: https://github.com/crunchynut007
src: https://gist.github.com/crunchynut007/05604a0d2288bf75e2b9aaf854503bac
*/

import { useCallback, useEffect, useRef, useState, memo } from "react";

type Props = {
  text?: string;
  cycles?: number;
  dynamic?: boolean;
};

export const HackerText = memo(
  ({ text = "ERIC CHU", cycles = 3, dynamic = true }: Props) => {
    const [textValue, setTextValue] = useState(text);
    const [cyclesValue, setCyclesValue] = useState(cycles);
    const [animLockout, setAnimLockout] = useState(false);
    const lettersRef = useRef<string>("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
    const animationRef = useRef<number>();

    // If dynamic, animates quicker on longer text
    const updateState = useCallback(() => {
      setTextValue(text);
      if (dynamic) {
        setCyclesValue(
          Math.min(20, Math.max(Math.floor(200 / text.length), 1)),
        );
      } else {
        setCyclesValue(cycles <= 0 ? 1 : cycles);
      }
    }, [cycles, dynamic, text]);

    useEffect(() => {
      updateState();
    }, [updateState]);

    // split text, return random character -> maps against letters array
    // then returns to original character after animation runs.
    // Each text array element will cycle through random characters
    // based on cycle count.
    const runAnimation = useCallback(() => {
      let iterator = 0;
      let tempText = textValue;
      setAnimLockout(true);

      const animate = () => {
        setTextValue(
          tempText
            .split("")
            .map((letter: string, index: number) => {
              if (letter === " ") return " ";
              if (index < iterator) return textValue[index];
              return lettersRef.current[
                Math.floor(Math.random() * lettersRef.current.length)
              ];
            })
            .join(""),
        );

        if (iterator >= text.length) {
          setAnimLockout(false);
          return () => {
            cancelAnimationFrame(animationRef.current!);
            animationRef.current = undefined;
          };
        }

        iterator += 1 / cyclesValue;
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }, [cyclesValue, lettersRef, text, textValue]);

    // Prevents animation overlap/re-run if already in progress
    const handleMouseOver = useCallback(() => {
      if (animLockout) return;
      runAnimation();
    }, [animLockout, runAnimation]);

    return (
      <h1
        className="text-center text-4xl font-semibold tracking-wider sm:text-5xl md:text-6xl"
        onMouseOver={handleMouseOver}
      >
        {textValue}
      </h1>
    );
  },
);
