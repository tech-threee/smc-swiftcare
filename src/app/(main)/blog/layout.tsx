import ClientProvider from "@/providers/client-provider";
import { Children } from "@/types";

export default function BlogLayout({ children }: Children) {
    return <ClientProvider>
        {children}
    </ClientProvider>;
}