import { useNavStore } from "@/stores/use-nav";
import { getCSSVariable, setCSSVariables } from "@/utils/css";
import { snapbounce } from "@/utils/debounce";
import { useCallback, useEffect, useRef } from "react";

export function useScrollNavVisibility() {
  const { isNavVisible, setIsNavVisible } = useNavStore();
  const prevScrollYRef = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > prevScrollYRef.current;
    const isAtPageTop = currentScrollY < 70;

    setIsNavVisible(prevIsVisible => {
      const cssVars = {
        // "--bottom-bar-size": getCSSVariable("--_bottom-bar-size") ?? "50px",
        "--side-nav-size": getCSSVariable("--_side-nav-size") ?? "70px",
        "--top-nav-size": getCSSVariable("--_top-nav-size") ?? "60px",
      };

      if (isAtPageTop) {
        setCSSVariables(cssVars);
        return true;
      }

      if (isScrollingDown && prevIsVisible) {
        // sets the listed css variables to 0px
        setCSSVariables(Object.fromEntries(Object.keys(cssVars).map(key => [key, "0px"])));

        return false;
      }

      if (!isScrollingDown && !prevIsVisible) {
        setCSSVariables(cssVars);
        return true;
      }

      return prevIsVisible;
    });

    prevScrollYRef.current = currentScrollY;
  }, [setIsNavVisible]);

  const snapbouncedHandleScroll = useRef(snapbounce(handleScroll, 100)).current;

  useEffect(() => {
    window.addEventListener("scroll", snapbouncedHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", snapbouncedHandleScroll);
  }, [snapbouncedHandleScroll]);

  return { isNavVisible };
}
