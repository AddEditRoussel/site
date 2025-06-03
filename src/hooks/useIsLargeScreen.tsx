import { useEffect, useState } from "react";

export const useIsLargeScreen = (value: number) => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth >= value
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > value);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLargeScreen;
};
