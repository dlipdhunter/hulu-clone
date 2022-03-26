import Head from 'next/head';
import Header from '../components/Header';
import Movies from '../components/Movies';
import Searchbar from '../components/Searchbar';
import requests, { searchRequestUrl } from '../utils/requests';

export default function Search({ results }) {
	return (
		<div>
			<Head>
				<title>Search - Hulu 2.0</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header showAccount={true} />
			<Searchbar />
			<Movies results={results} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const search = context.query.search;
	const url = search
		? searchRequestUrl.replace('$QUERY$', search)
		: requests.trending.url;

	const request = await fetch(url).then((res) => res.json());

	return {
		props: {
			results: request.results,
		},
	};
}
