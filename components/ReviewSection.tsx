import React from 'react'

function ReviewSection() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 border-t">
			<div className="container grid items-center gap-4 px-4 text-center md:px-6">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Experience the Perfection
					</h2>
					<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Don't just take our word for it. See what our customers have to say
						about their experience.
					</p>
				</div>
				<div className="mx-auto mt-2 flex justify-center items-start max-w-5xl gap-4 lg:grid-cols-3 lg:gap-12">
					<div className="flex flex-col gap-2">
						<img
							alt="User"
							className="mx-auto mb-2 rounded-full overflow-hidden object-cover object-center"
							height="200"
							src="https://avatar.iran.liara.run/public/80"
							style={{
								aspectRatio: '200/200',
								objectFit: 'cover',
							}}
							width="200"
						/>
						<blockquote className="text-2xl font-bold tracking-tighter">
							"This note-taking app is a game-changer! Seamless sync and
							top-notch security keep my notes accessible and safe across all my
							devices."
						</blockquote>
						<p className="font-bold">Sarah Johnson</p>
					</div>
					<div className="flex flex-col gap-2">
						<img
							alt="User"
							className="mx-auto mb-2 rounded-full overflow-hidden object-cover object-center"
							height="200"
							src="https://avatar.iran.liara.run/public/51"
							style={{
								aspectRatio: '200/200',
								objectFit: 'cover',
							}}
							width="200"
						/>
						<blockquote className="text-2xl font-bold tracking-tighter">
							"Life-saver app! Versatile features and customizable options keep
							me organized and on top of my tasks effortlessly.”
						</blockquote>
						<p className="font-bold">Alexa Ramirez</p>
					</div>
					<div className="flex flex-col gap-2">
						<img
							alt="User"
							className="mx-auto mb-2 rounded-full overflow-hidden object-cover object-center"
							height="200"
							src="https://avatar.iran.liara.run/public/8"
							style={{
								aspectRatio: '200/200',
								objectFit: 'cover',
							}}
							width="200"
						/>
						<blockquote className="text-2xl font-bold tracking-tighter">
							"Best note-taking app ever! Intuitive interface, easy
							collaboration, and access from anywhere make it my go-to for
							productivity"
						</blockquote>
						<p className="font-bold">David Lee</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ReviewSection
