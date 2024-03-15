import PageTitle from "@/components/core/page-title";
import Sidebar from "@/components/navigation/sidebar";
import { Children } from "@/types";

export default function MainLayout({children}: Children) {
    return (
        <main className='w-full h-screen flex max-h-screen max-w-screen'>
            <Sidebar />
            <section className='w-full h-full max-h-full p-8 overflow-auto'>
                <PageTitle />
                {children}
            </section>
        </main>
    )
}