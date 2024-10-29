export interface User {
	id: number
	username: string
	fullname: string
	phone: string
	email: string
	isActive: boolean
	verified: boolean
	balance: number
	createdAt: string
}

export interface ApiResponse {
	data: User[]
}

export type PopoverComponentProps = {
	condition: boolean
	title1: string
	title2: string
}
