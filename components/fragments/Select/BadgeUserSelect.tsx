import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const BadgeUserSelect = ({
	title1,
	title2,
}: {
	title1: string
	title2: string
}) => {
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
					{title1}
				</SelectItem>
				<SelectItem
					value="Not Verified"
					className="bg-destructive focus:bg-destructive2 focus:text-destructive-foreground text-destructive-foreground"
				>
					{title2}
				</SelectItem>
			</SelectContent>
		</Select>
	)
}

export default BadgeUserSelect
