import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
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
import { UserRoundPen, UserSearch } from "lucide-react"

const invoices = [
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "2",
		username: "Ekanuraini",
		fullname: "Wahyu Eka Nuraini",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
	{
		id: "1",
		username: "Dewangga67",
		fullname: "Mohammad Dewangga Almahfuzhillah",
		email: "dewanggamahfuz@gmail.com",
		phone: "62082257943949",
		status: false,
		isVerified: false,
		balance: 900000,
		createdAt: new Date().toLocaleString(),
	},
]

export function TableUser() {
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
				{invoices.map((user) => (
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
							<Popover>
								<PopoverTrigger asChild>
									<Badge
										className="cursor-pointer"
										variant={user.status ? "default" : "destructive"}
									>
										{user.status ? "Active" : "Inactive"}
									</Badge>
								</PopoverTrigger>
								<PopoverContent className="w-52">
									<Select>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Change Status" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem
												value="Verified"
												className="bg-primary focus:bg-primary2 focus:text-primary-foreground text-primary-foreground"
											>
												Active
											</SelectItem>
											<SelectItem
												value="Not Verified"
												className="bg-destructive focus:bg-destructive2 focus:text-destructive-foreground text-destructive-foreground"
											>
												Inactive
											</SelectItem>
										</SelectContent>
									</Select>
								</PopoverContent>
							</Popover>
						</TableCell>
						<TableCell>
							<Popover>
								<PopoverTrigger asChild>
									<Badge
										className="cursor-pointer text-nowrap"
										variant={user.isVerified ? "default" : "destructive"}
									>
										{user.isVerified ? "Verified" : "Not Verified"}
									</Badge>
								</PopoverTrigger>
								<PopoverContent className="w-52">
									<Select>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Change Status" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem
												value="Verified"
												className="bg-primary focus:bg-primary2 focus:text-primary-foreground text-primary-foreground"
											>
												Verifed
											</SelectItem>
											<SelectItem
												value="Not Verified"
												className="bg-destructive focus:bg-destructive2 focus:text-destructive-foreground text-destructive-foreground"
											>
												Not Verifed
											</SelectItem>
										</SelectContent>
									</Select>
								</PopoverContent>
							</Popover>
						</TableCell>
						<TableCell className="flex gap-3">
							<Tooltip>
								<TooltipTrigger asChild>
									<Popover>
										<PopoverTrigger asChild>
											<Button size={"icon"}>
												<UserSearch />
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-[600px]">
											<div className="grid gap-4">
												<h2 className="text-lg text-primary2 font-medium">
													Detail User
												</h2>
												<Table>
													<TableBody>
														<TableRow>
															<TableCell className="font-medium">ID</TableCell>
															<TableCell>{user.id}</TableCell>
														</TableRow>
														<TableRow>
															<TableCell className="font-medium">
																Fullname
															</TableCell>
															<TableCell>{user.fullname}</TableCell>
														</TableRow>
														<TableRow>
															<TableCell className="font-medium">
																Username
															</TableCell>
															<TableCell>{user.username}</TableCell>
														</TableRow>
														<TableRow>
															<TableCell className="font-medium">
																Email
															</TableCell>
															<TableCell>{user.email}</TableCell>
														</TableRow>
														<TableRow>
															<TableCell className="font-medium">
																Phone
															</TableCell>
															<TableCell>{user.phone}</TableCell>
														</TableRow>
														<TableRow>
															<TableCell className="font-medium">
																Balance
															</TableCell>
															<TableCell>
																{user.balance.toLocaleString("id-ID", {
																	style: "currency",
																	currency: "IDR",
																})}
															</TableCell>
														</TableRow>
														<TableRow>
															<TableCell className="font-medium">
																CreatedAt
															</TableCell>
															<TableCell>{user.createdAt}</TableCell>
														</TableRow>
													</TableBody>
												</Table>
											</div>
										</PopoverContent>
									</Popover>
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
