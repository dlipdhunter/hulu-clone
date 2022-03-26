import Image from 'next/image';
import HeaderItem from './HeaderItem';
import { useSession } from 'next-auth/react';
import {
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';

function Header({ showAccount }) {
	const { data: session } = useSession();

	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center">
			<div className="flex flex-grow justify-start max-w-2xl">
				<HeaderItem title="HOME" route="/" Icon={HomeIcon} />

				{session && (
					<>
						<HeaderItem
							title="TRENDING"
							route="/trending"
							Icon={LightningBoltIcon}
						/>
						<HeaderItem title="SEARCH" route="/search" Icon={SearchIcon} />
					</>
				)}
				{showAccount && (
					<HeaderItem title="ACCOUNT" route="/account" Icon={UserIcon} />
				)}
			</div>
			<Image
				className="object-contain"
				src="/hulu-white.png"
				width={200}
				height={100}
			/>
		</header>
	);
}

export default Header;
