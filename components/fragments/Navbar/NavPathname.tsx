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
import React from "react"

const NavPathname = () => {
	const pathname = usePathname()
	const path = ["Home", ...pathname.split("/").filter((item) => item !== "")]

	return (
		<Breadcrumb>
			<BreadcrumbList className="text-primary-foreground">
				{path.map((item, index) => {
					const isLast = index === path.length - 1
					const href =
						item === "Home" ? "/" : `/${path.slice(1, index + 1).join("/")}`

					return (
						<React.Fragment key={index}>
							<BreadcrumbItem>
								{isLast ? (
									<BreadcrumbPage>{item}</BreadcrumbPage>
								) : (
									<BreadcrumbLink href={href}>{item}</BreadcrumbLink>
								)}
							</BreadcrumbItem>
							{!isLast && <BreadcrumbSeparator key={`separator-${index}`} />}
						</React.Fragment>
					)
				})}
			</BreadcrumbList>
		</Breadcrumb>
	)
}

export default NavPathname
