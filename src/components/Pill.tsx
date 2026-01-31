import type { ElementType } from "react";

interface PillProps {
  message: string;
  icon: ElementType;
  color?: string;
}

export default function Pill({
  message,
  icon: Icon,
  color = "blue-500",
}: PillProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-blue-700 font-medium text-sm bg-${color} shadow-sm `}
    >
      <Icon className="w-4 h-4" />
      <span>{message}</span>
    </div>
  );
}
