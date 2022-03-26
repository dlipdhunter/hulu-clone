import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Movies from '../components/Movies';
import requests, { genresRequestUrl } from '../utils/requests';

export default function Home({ results }) {
	return (
		<div>
			<Head>
				<title>Home - Hulu 2.0</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header showAccount={true} />
			<Nav items={requests} clickable={true} />
			<Movies results={results} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;

	const request = await fetch(
		`${requests[genre]?.url || requests.trending.url}`
	).then((res) => res.json());

	return {
		props: {
			results: request.results,
		},
	};
}
