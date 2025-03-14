import { useEffect } from "react";

const useFadeIn = (selector: string = ".fade-in-item") => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(selector).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
};

export default useFadeIn;
