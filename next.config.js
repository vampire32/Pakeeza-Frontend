/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
	async rewrites() {
		return [
			{
				source: "/",
				destination: "/",
			},
		];
	},
};
module.exports = nextConfig
