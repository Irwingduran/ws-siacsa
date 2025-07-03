import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "error";
}

/**
 * Badge component for displaying small status or label elements.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-block px-2 py-0.5 rounded text-xs font-semibold align-middle select-none transition-colors duration-150";
  const variantStyles: Record<string, string> = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.default} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
