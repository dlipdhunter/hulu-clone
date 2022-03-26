import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import Header from '../components/Header';

export default function Account() {
	const { data: session } = useSession();

	return (
		<div>
			<Head>
				<title>Account - Hulu 2.0</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header showAccount={false} />

			<div className="container sm:mx-10">
				{session && (
					<>
						<div>
							<h1 className="text-xl">Welcome, {session?.user?.email}</h1>
							<button
								className="mt-4 rounded-sm border py-2 px-4 hover:bg-white hover:text-black"
								onClick={signOut}
							>
								Logout
							</button>
						</div>
					</>
				)}
				{!session && (
					<div>
						<h1 className="text-xl">You are not logged in.</h1>
						<p className="mt-4">Please login to view watch history and more.</p>
						<button
							className="mt-4 rounded-sm border py-2 px-4 hover:bg-white hover:text-black"
							onClick={signIn}
						>
							Login
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
