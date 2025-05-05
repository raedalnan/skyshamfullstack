import { Menu } from "lucide-react";

export default function MobileMenuToggle({
  onToggle,
}: {
  onToggle: () => void;
}) {
  return (
    <button className="md:hidden cursor-pointer" onClick={onToggle}>
      <Menu className="h-8 w-8" />
    </button>
  );
}
