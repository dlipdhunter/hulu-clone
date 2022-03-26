import YoutubeEmbed from './YoutubeEmbed';

export default function Trailers({ trailers }) {
	return (
		<>
			<h1 className="text-xl">Trailers</h1>
			{trailers.length > 0 ? (
				<div className="px-5 my-10 sm:grid 2xl:grid-cols-2 3xl:flex flex-wrap justify-start">
					{trailers.map((video) => (
						<YoutubeEmbed key={video.id} video={video} />
					))}
				</div>
			) : (
				<div className="">
					<p>Trailers unavailable.</p>
				</div>
			)}
		</>
	);
}
