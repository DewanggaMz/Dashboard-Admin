import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { PopoverComponentProps, User } from "@/types/users.type"
import { UserRoundPen, UserSearch } from "lucide-react"
import BadgeUserSelect from "../Select/BadgeUserSelect"

const PopoverBadge: React.FC<PopoverComponentProps> = ({
	condition,
	title1,
	title2,
}) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Badge
					className="cursor-pointer"
					variant={condition ? "default" : "destructive"}
				>
					{condition ? title1 : title2}
				</Badge>
			</PopoverTrigger>
			<PopoverContent className="w-52">
				<BadgeUserSelect title1={title1} title2={title2} />
			</PopoverContent>
		</Popover>
	)
}

const PopoverDetail = ({ user }: { user: User }) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button size={"icon"}>
					<UserSearch />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[600px]">
				<div className="grid gap-4">
					<h2 className="text-lg text-primary2 font-medium">Detail User</h2>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell className="font-medium">ID</TableCell>
								<TableCell>{user.id}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">Fullname</TableCell>
								<TableCell>{user.fullname}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">Username</TableCell>
								<TableCell>{user.username}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">Email</TableCell>
								<TableCell>{user.email}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">Phone</TableCell>
								<TableCell>{user.phone}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">Balance</TableCell>
								<TableCell>
									{user.balance.toLocaleString("id-ID", {
										style: "currency",
										currency: "IDR",
									})}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">CreatedAt</TableCell>
								<TableCell>{user.createdAt}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</PopoverContent>
		</Popover>
	)
}

export function TableUser({ users }: { users: User[] }) {
	return (
		<Table>
			<TableCaption className="bg-primary text-primary-foreground">
				All Users
			</TableCaption>
			<TableHeader className="bg-primary">
				<TableRow className="hover:bg-primary2">
					<TableHead className="w-[100px] text-primary-foreground">
						id
					</TableHead>
					<TableHead className="text-primary-foreground">Username</TableHead>
					<TableHead className="text-primary-foreground">Email</TableHead>
					<TableHead className="text-primary-foreground">Phone</TableHead>
					<TableHead className="text-primary-foreground">Balance</TableHead>
					<TableHead className="text-primary-foreground">Status</TableHead>
					<TableHead className="text-primary-foreground">Verified</TableHead>
					<TableHead className="text-primary-foreground">Action</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{users.map((user) => (
					<TableRow key={user.id}>
						<TableCell className="font-medium">{user.id}</TableCell>
						<TableCell>{user.username}</TableCell>
						<TableCell className="">{user.email}</TableCell>
						<TableCell>{user.phone}</TableCell>
						<TableCell className="">
							{user.balance.toLocaleString("id-ID", {
								style: "currency",
								currency: "IDR",
							})}
						</TableCell>
						<TableCell>
							<PopoverBadge
								condition={user.isActive}
								title1="Active"
								title2="Inactive"
							/>
						</TableCell>
						<TableCell>
							<PopoverBadge
								condition={user.verified}
								title1="Verified"
								title2="Not Verified"
							/>
						</TableCell>
						<TableCell className="flex gap-3">
							<Tooltip>
								<TooltipTrigger asChild>
									<PopoverDetail user={user} />
								</TooltipTrigger>
								<TooltipContent>
									<p>Detail</p>
								</TooltipContent>
							</Tooltip>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button variant="default" size={"icon"}>
										<UserRoundPen />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Edit</p>
								</TooltipContent>
							</Tooltip>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
