const API_KEY = process.env.TMDB_API_KEY;
const base_url = 'https://api.themoviedb.org/3';

export default {
	trending: {
		title: 'Trending',
		url: `${base_url}/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	topRated: {
		title: 'Top Rated',
		url: `${base_url}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	nowPlaying: {
		title: 'Now Playing',
		url: `${base_url}/movie/now_playing?api_key=${API_KEY}&language=en-US`,
	},
	popular: {
		title: 'Popular',
		url: `${base_url}/movie/popular?api_key=${API_KEY}&language=en-US`,
	},
	upcoming: {
		title: 'Upcoming',
		url: `${base_url}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
	},
};

export const genresRequestUrl = `${base_url}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
export const searchRequestUrl = `${base_url}/search/movie?api_key=${API_KEY}&language=en-US&query=$QUERY$&page=1&include_adult=false`;
export const movieByIdRquestUrl = `${base_url}/movie/$MOVIEID$?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
