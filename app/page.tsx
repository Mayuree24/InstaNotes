import { NavComponent } from '../components/NavComponent'
import HeroSection from '../components/HeroSection'

import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SignUpUserSteps'
import Header from '@/components/Header'
import { cookies } from 'next/headers'
import ReviewSection from '@/components/ReviewSection'
import GetStartedSection from '@/components/GetStartedSection'

export default async function Index() {
	const cookieStore = cookies()

	const canInitSupabaseClient = () => {
		// This function is just for the interactive tutorial.
		// Feel free to remove it once you have Supabase connected.
		try {
			createClient(cookieStore)
			return true
		} catch (e) {
			return false
		}
	}

	const isSupabaseConnected = canInitSupabaseClient()

	return (
		<div className="flex-1 w-full flex flex-col gap-2 items-center">
			<NavComponent isSupabaseConnected={isSupabaseConnected} />

			{/* <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
				
			</div> */}

			<HeroSection />
			<ReviewSection />
			<GetStartedSection />

			<footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
				<p>
					Built with love by{' '}
					<a
						href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
						target="_blank"
						className="font-bold hover:underline"
						rel="noreferrer"
					>
						a group at Conestoga College
					</a>
				</p>
			</footer>
		</div>
	)
}
