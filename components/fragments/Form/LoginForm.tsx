import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"

const LoginForm = () => {
	return (
		<form action="" className="space-y-6 text-slate-700">
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Label htmlFor="email">Email</Label>
				<Input type="email" id="email" placeholder="Email" />
			</div>
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Label htmlFor="password">Password</Label>
				<Input type="password" id="password" placeholder="Password" />
			</div>
			<div className="flex items-center space-x-2">
				<Checkbox id="remember" />
				<Label htmlFor="remember">Remember me</Label>
			</div>
			<Button type="submit" className="w-full">
				Login
			</Button>
		</form>
	)
}

export default LoginForm
