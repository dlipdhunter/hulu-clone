import Image from 'next/image';

export default function MovieDetail({ movie }) {
	const BASE_URL = 'https://image.tmdb.org/t/p/original/';

	return (
		<div className="mb-10">
			<Image
				layout="responsive"
				src={
					`${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
					`${BASE_URL}${movie.poster_path}`
				}
				width={1920}
				height={320}
			/>

			<h1 className="text-4xl mt-4">{movie.original_title}</h1>
			<h2 className="text-2xl my-2">{movie.tagline}</h2>
			<h3 className="text-xl">Overview</h3>
			<div className="flex flex-col justify-between">
				<div>
					<p className="text-lg text-gray-300">{movie.overview}</p>
				</div>
				<div className="mt-4 grid grid-cols-2 sm:max-w-sm">
					<p className="text-lg text-gray-300">Runtime: </p>
					<p className="text-lg text-gray-300">{`${Math.floor(
						movie.runtime / 60
					)} Hours ${movie.runtime % 60} minutes.`}</p>
					<p className="text-lg text-gray-300">Release date:</p>
					<p className="text-lg text-gray-300">{movie.release_date}</p>
					<p className="text-lg text-gray-300">Rating:</p>
					<p className="text-lg text-gray-300">{movie.vote_average}</p>
				</div>
			</div>
		</div>
	);
}
