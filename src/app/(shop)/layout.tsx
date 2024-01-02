import { Sidebar } from "@/components";
import TopMenu from "@/components/ui/top-menu/TopMenu";

export default function ShopLayout({ children}: { 
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <TopMenu/>
      <Sidebar/>
      <div className="px-0 sm:px-6">
        {children}
      </div>
    </div>
  );
}