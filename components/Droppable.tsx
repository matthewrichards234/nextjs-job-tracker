import { useDroppable } from "@dnd-kit/react";
export default function Droppable({
  id,
  children,
}: {
  id: string;
  children?: React.ReactNode;
}) {
  const { ref } = useDroppable({ id });

  return (
    <div
      ref={ref}
      className="min-h-75 rounded-2xl border border-gray-200 bg-gray-50/80 p-3 transition-colors"
    >
      {children}
    </div>
  );
}
