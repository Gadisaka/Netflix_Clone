const key = '8a682f85c467ff5eca572ff635952438'



const requests = {
     requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${ key}&language=en-US&page=1`,
     requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${ key}&language=en-US&page=1`,
     requestHorror : `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=27&page=1`,
     requestTrending : `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
     requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

};

export default requests