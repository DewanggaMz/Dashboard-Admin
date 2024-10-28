import { ToggleTheme } from "./ToggleTheme"
import { SidebarTrigger } from "../../ui/sidebar"
import NavPathname from "./NavPathname"

const Navbar = () => {
	return (
		<div className="bg-primary w-full px-4 py-2 h-14 flex items-center justify-between">
			<SidebarTrigger variant={"secondary"} />
			<NavPathname />
			<ToggleTheme />
		</div>
	)
}

export default Navbar
