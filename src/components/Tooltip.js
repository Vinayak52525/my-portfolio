import { useState } from "react";

export const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="relative inline-block hover:opacity-100"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && text && (
        <div className="visible bg-cyan-300 text-black text-center text-sm rounded-md px-1 py-0.5 absolute z-10 bottom-full left-full -ml-12 mb-1 transition-opacity duration-1000 whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
};
