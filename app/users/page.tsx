import { PaginationUser } from "@/components/fragments/Pagination/PaginationUser"
import { TableUser } from "@/components/fragments/Table/tableUsers"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React from "react"
import axios from "axios"
import { ApiResponse, User } from "@/types/users.type"

const UserPage = async () => {
	const response: ApiResponse = await axios
		.get<ApiResponse>("http://localhost:4000/api/users", {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			return response.data
		})
		.catch((error) => {
			console.error(error)
			return { data: [] }
		})

	const users: User[] = response.data

	return (
		<Card className="w-full bg-secondary min-h-56">
			<CardHeader className="mb-3">
				<CardTitle>Users Magaement</CardTitle>
				<CardDescription>Manage your users</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="flex justify-between items-center flex-wrap space-y-3">
					<div className="flex gap-3">
						<Button>Add New User</Button>
						<Button>Save</Button>
					</div>
					<div className="flex w-full max-w-sm items-center space-x-2">
						<Input type="Search" placeholder="Search" />
						<Button type="submit">Search</Button>
					</div>
				</div>
				<div className="bg-background rounded-md overflow-hidden">
					<TableUser users={users} />
				</div>
			</CardContent>
			<CardFooter>
				<PaginationUser />
			</CardFooter>
		</Card>
	)
}

export default UserPage
