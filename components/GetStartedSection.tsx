import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function GetStartedSection() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12">
			<div className="text-center">
				<h2 className="text-5xl font-bold mb-4">Get started for free</h2>
				<p className="text-lg mb-6">
					Play around with it first. Pay and add your team later.
				</p>
				<div className="flex justify-center gap-4">
					<Button className="bg-black text-white px-6 py-2 rounded-md">
						Try InstaNotes free
					</Button>
					<Link className="text-black underline hover:no-underline" href="#">
						Request a demo →
					</Link>
				</div>
			</div>
		</div>
	)
}

export default GetStartedSection
