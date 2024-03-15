import DashboardCard from "@/components/cards/dashboard-card";
import { dashBoardIconsMap } from "@/utils/client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <section className="grid gap-4  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          label="Total Staff"
          value={400}
          icon={dashBoardIconsMap.staff}
          link="/staff"
        />
        <DashboardCard
          label="Total Messages"
          value={1000}
          icon={dashBoardIconsMap.messages}
          link="/messages"

        />
        <DashboardCard
          label="Total Posts"
          value={20}
          icon={dashBoardIconsMap.posts}
          link="/blog"

        />
      </section>
    </main>
  );
}
