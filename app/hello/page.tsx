import React from "react"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const page = () => {
	return (
		<Select>
		<SelectTrigger className="w-full">
			<SelectValue placeholder="Change Status" />
		</SelectTrigger>
		<SelectContent>
			<SelectItem
				value="Verified"
				className="bg-primary focus:bg-primary2 focus:text-primary-foreground text-primary-foreground"
			>
				jshjh
			</SelectItem>
			<SelectItem
				value="Not Verified"
				className="bg-destructive focus:bg-destructive2 focus:text-destructive-foreground text-destructive-foreground"
			>
				kjskj
			</SelectItem>
		</SelectContent>
	</Select>
	)
}

export default page
