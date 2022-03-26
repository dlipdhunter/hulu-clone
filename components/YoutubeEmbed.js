export default function YoutubeEmbed({ video }) {
	return (
		<iframe
			className="aspect-video"
			width="853"
			height="480"
			src={`https://www.youtube.com/embed/${video.key}`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
		/>
	);
}
