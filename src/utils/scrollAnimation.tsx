import { useEffect } from "react";

interface ScrollObserverProps {
  selector: string; // ตัวเลือกสำหรับ element (CSS Selector)
  className: string; // คลาสที่จะเพิ่ม
  visibilityThreshold?: number; // เปอร์เซ็นต์ของหน้าจอที่เริ่มแสดง (default = 0.6)
}

const useScrollObserver = ({
  selector,
  className,
  visibilityThreshold = 0.6,
}: ScrollObserverProps) => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < viewportHeight * visibilityThreshold;

        if (isVisible && !el.classList.contains(className)) {
          el.classList.add(className); // เพิ่มคลาสเมื่อ element เข้า viewport
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ตรวจสอบทันทีเมื่อ component โหลด

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selector, className, visibilityThreshold]);
};

export default useScrollObserver;