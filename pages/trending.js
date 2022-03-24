import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Movies from '../components/Movies';
import requests from '../utils/requests';
function Trending({ results }) {
	const currentNavItem = { trending: requests['trending'] };

	return (
		<div>
			<Head>
				<title>Trending - Hulu 2.0</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Nav items={currentNavItem} clickable={false} />
			<Movies results={results} />
		</div>
	);
}

export async function getServerSideProps() {
	const request = await fetch(requests.trending.url).then((res) => res.json());

	return {
		props: {
			results: request.results,
		},
	};
}

export default Trending;
