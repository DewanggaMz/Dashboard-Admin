"use client"
import { usePathname } from "next/navigation"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/fragments/AppSidebar"
import Navbar from "@/components/fragments/Navbar/Navbar"

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
	const disabled = ["/login", "/register"].includes(usePathname())
	return (
		<>
			{disabled ? (
				<main className="w-full min-h-screen">{children}</main>
			) : (
				<SidebarProvider defaultOpen={false}>
					<AppSidebar />
					<main className="w-full min-h-screen">
						<Navbar />
						<div className="p-4 h-full">{children}</div>
					</main>
				</SidebarProvider>
			)}
		</>
	)
}

export default LayoutRoot
