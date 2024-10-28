import RegisterForm from "@/components/fragments/Form/RegisterForm"
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

const ReisterPage = () => {
	return (
		<Card className="w-[400px] space-y-4">
			<CardHeader>
				<CardTitle className="text-primary">Daftar</CardTitle>
				<CardDescription>
					Silakan masuk untuk melanjutkan dan mengakses fitur eksklusif kami
				</CardDescription>
			</CardHeader>
			<CardContent>
				<RegisterForm />
			</CardContent>
			<CardFooter className="flex gap-2 justify-center">
				<CardDescription>Sudah punya akun?</CardDescription>
				<Link href="/login" className="text-primary font-medium">
					Masuk
				</Link>
			</CardFooter>
		</Card>
	)
}

export default ReisterPage
