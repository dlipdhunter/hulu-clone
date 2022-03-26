import Head from 'next/head';
import Header from '../../components/Header';
import MovieDetail from '../../components/MovieDetail';
import Trailers from '../../components/Trailers';
import { movieByIdRquestUrl } from '../../utils/requests';

export default function MovieById({ movieDetails, trailers }) {
	return (
		<div>
			<Head>
				<title>Watch movie - Hulu 2.0</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header showAccount={true} />
			<div className="mx-2 sm:mx-10">
				<MovieDetail movie={movieDetails} />
				<Trailers trailers={trailers} />
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const movieDetails = await fetch(
		movieByIdRquestUrl.replace('$MOVIEID$', context.query.movieId)
	).then((res) => res.json());

	const trailers = movieDetails.videos.results.filter(
		(v) => v.type == 'Trailer'
	);

	return {
		props: {
			movieDetails,
			trailers,
		},
	};
}
