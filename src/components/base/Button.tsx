import { memo } from "react";

const Button = ({
  children,
  className = "bg-sky-500 hover:bg-sky-600 text-white ",
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void | null;
  className?: string;
}) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center space-x-1 md:space-x-1.5 py-2 px-2 sm:px-4 md:py-3 md:px-5 rounded-full active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export const BaseButton = memo(Button);
