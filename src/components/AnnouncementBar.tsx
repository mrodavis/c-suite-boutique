import { Gift } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full py-2.5 text-center text-xs tracking-[0.18em] uppercase font-medium"
      style={{ backgroundColor: "#F5D6D6", color: "#3A2D2D" }}
    >
      <Gift className="inline-block mr-2 mb-0.5" size={13} />
      Free Shipping on Orders Over $75
    </div>
  );
}
