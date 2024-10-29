/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/api/:path*", // Semua permintaan ke /api/* akan diteruskan ke backend
				destination: "http://localhost:4000/api/:path*", // Proksi ke backend di port 4000
			},
		]
	},
}

export default nextConfig
