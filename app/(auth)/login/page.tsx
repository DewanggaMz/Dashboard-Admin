import LoginForm from "@/components/fragments/Form/LoginForm"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import React from "react"

const Login = () => {
	return (
		<Card className="w-[400px] p-2 space-y-4">
			<CardHeader>
				<CardTitle className="text-primary">Login</CardTitle>
				<CardDescription>
					Please log in to continue and access our exclusive features
				</CardDescription>
			</CardHeader>
			<CardContent>
				<LoginForm />
			</CardContent>
			<CardFooter className="flex gap-2 justify-center">
				<CardDescription> Don&apos;t have an account?</CardDescription>
				<Link href="/register" className="text-primary font-medium">
					Register
				</Link>
			</CardFooter>
		</Card>
	)
}

export default Login
