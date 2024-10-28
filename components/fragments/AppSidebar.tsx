import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ChevronUp, User2 } from "lucide-react"
import Link from "next/link"

export function AppSidebar() {
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader className="h-14 bg-primary"></SidebarHeader>
			<SidebarContent className="p-2">
				<SidebarMenu>
					<SidebarMenuItem>
						<Link href="/login">Home</Link>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter className="h-14 bg-primary">
				<SidebarMenu>
					<SidebarMenuItem className="flex justify-center items-center">
						<DropdownMenu>
							<DropdownMenuTrigger className="" asChild>
								<SidebarMenuButton
									className="h-full w-full bg-sidebar-accent "
									tooltip={"User"}
								>
									<User2 /> Username
									<ChevronUp className="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								side="top"
								className="w-[--radix-popper-anchor-width]"
							>
								<DropdownMenuItem>
									<Link href="/account">Account</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<span>Settings</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link href="/logout">Logout</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
