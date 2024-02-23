import React from 'react'
import DeployButton from './DeployButton'
import AuthButton from './AuthButton'
import Link from 'next/link'

export function NavComponent({
	isSupabaseConnected,
}: {
	isSupabaseConnected: boolean
}) {
	return (
		<nav className="w-full flex justify-center">
			<div className="w-full max-w-4xl flex justify-between items-center py-2 text-sm shadow-md rounded-full px-8 my-4">
				<Link href="/">
					<p className="text-xl font-bold py-2">InstaNotes</p>
				</Link>
				<div className="flex">
					<Link
						className="text-base px-4 py-2 text-zinc-500 rounded-full transition-colors duration-200 ease-in-out hover:text-pink-500"
						href="/pricing"
					>
						Pricing
					</Link>
					<Link
						className="text-base px-4 py-2 text-zinc-500 rounded-full transition-colors duration-200 ease-in-out hover:text-pink-500"
						href="/about"
					>
						About Us
					</Link>
					<Link
						className="text-base text-zinc-500 hover:bg-pink-200 px-4 py-2 rounded-full transition-colors duration-200 ease-in-out hover:text-pink-500"
						href="/login"
					>
						Login
					</Link>
				</div>
			</div>
		</nav>
	)
}
