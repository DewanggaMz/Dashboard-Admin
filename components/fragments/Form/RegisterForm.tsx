"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from "react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { Eye, EyeClosed } from "lucide-react"

type E164Number = string

const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirm, setShowConfirm] = useState(false)
	const [phone, setPhone] = useState<E164Number | undefined>(undefined)

	// const []

	const handleChangePhone = (value: E164Number | undefined) => {
		setPhone(value)
	}

	return (
		<form action="" className="space-y-6 text-slate-700">
			<div className="flex gap-4">
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="username">Username</Label>
					<Input
						type="username"
						id="username"
						placeholder="Username"
						min={3}
						required
					/>
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="fullname">Nama Lengkap</Label>
					<Input
						type="fullname"
						id="fullname"
						placeholder="Nama Lengkap"
						min={3}
						required
					/>
				</div>
			</div>
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="email">Alamat Email</Label>
				<Input
					type="email"
					id="email"
					className="block"
					placeholder="Alamat Email"
					required
				/>
			</div>
			<PhoneInput
				value={phone}
				defaultCountry="ID"
				onChange={handleChangePhone}
				inputComponent={Input}
				limitMaxLength={true}
				placeholder="08XX-XXXX-XXXX"
			/>
			<div className="flex gap-4">
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="password">Password</Label>
					<div className="relative">
						<Input
							type={showPassword ? "text" : "password"}
							id="password"
							placeholder="Password"
							required
						/>
						<Button
							type="button"
							variant={"outline"}
							size={"icon"}
							className="h-7 w-7 absolute top-1/2 right-2 -translate-y-1/2"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? <Eye /> : <EyeClosed />}
						</Button>
					</div>
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="ConfirmPassword" className="text-sm">
						Konfirmasi Password
					</Label>
					<div className="relative">
						<Input
							type={showConfirm ? "text" : "password"}
							id="ConfirmPassword"
							placeholder="Konfirmasi password"
							required
						/>
						<Button
							type="button"
							variant={"outline"}
							size={"icon"}
							className="h-7 w-7 absolute top-1/2 right-2 -translate-y-1/2"
							onClick={() => setShowConfirm(!showConfirm)}
						>
							{showConfirm ? <Eye /> : <EyeClosed />}
						</Button>
					</div>
				</div>
			</div>
			<Button type="submit" className="w-full">
				Login
			</Button>
		</form>
	)
}

export default RegisterForm
