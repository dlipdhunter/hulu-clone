import { SearchCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Searchbar() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');

	function onSearch(e) {
		e.preventDefault();
		router.push(`?search=${searchTerm}`);
	}

	return (
		<div>
			<form onSubmit={onSearch} className="px-4 sm:px-6 lg:px-8 xl:px-96">
				<div className="relative">
					<input
						type="text"
						className="h-14 w-full text-gray-900 pr-14 pl-5 rounded z-0 focus:shadow focus:outline-none"
						placeholder="Search movies..."
						name="searchTerm"
						maxLength={100}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button className="absolute top-3 right-3">
						<SearchCircleIcon className="h-8 text-gray-400 z-20 hover:text-gray-500" />
					</button>
				</div>
			</form>
		</div>
	);
}
