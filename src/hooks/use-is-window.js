import { useEffect } from "react";

export const UseIsWindow = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);
};
