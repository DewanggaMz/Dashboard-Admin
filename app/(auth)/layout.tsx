import { Button } from "@/components/ui/button"
import React from "react"
import { type } from "./../../components/ui/input"
import { ArrowBigLeft, ArrowLeft } from "lucide-react"
import Link from "next/link"

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col md:flex-row h-full min-h-screen relative">
			<div className="min-h-full md:w-1/3 bg-primary flex items-center justify-center p-6">
				{children}
			</div>
			<div className="bg-slate-100 p-3 hidden md:w-2/3 md:block">
				<h1>login ss</h1>
			</div>

			<Button
				type="button"
				variant={"secondary"}
				className="absolute top-4 left-4"
				asChild
			>
				<Link href={"/"}>
					<ArrowLeft className="w-6 h-6" />
					<span>Back</span>
				</Link>
			</Button>
		</div>
	)
}

export default LoginLayout
