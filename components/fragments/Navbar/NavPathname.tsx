"use client"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

const NavPathname = () => {
	const pathname = usePathname()

	const path = pathname.split("/").filter((item) => item !== "")
	path.unshift("Home")

	return (
		<Breadcrumb>
			<BreadcrumbList className="text-primary-foreground">
				{path.map((item, index) =>
					path.length - 1 === index ? (
						<BreadcrumbItem key={index}>
							<BreadcrumbPage>{item}</BreadcrumbPage>
						</BreadcrumbItem>
					) : (
						<>
							<BreadcrumbItem key={index}>
								<BreadcrumbLink href={item === "Home" ? "/" : `/${item}`}>
									{item}
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
						</>
					)
				)}
			</BreadcrumbList>
		</Breadcrumb>
	)
}

export default NavPathname
