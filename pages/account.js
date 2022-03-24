import { useSession, signIn, signOut } from 'next-auth/react';

export default function Account() {
	const { data: session } = useSession();

	return (
		<div>
			{session && (
				<div>
					<p>Welcome, {session?.user?.email}</p>
					<button onClick={signOut}>Logout</button>
				</div>
			)}
			{!session && (
				<div>
					<button onClick={signIn}>Login</button>
				</div>
			)}
		</div>
	);
}
