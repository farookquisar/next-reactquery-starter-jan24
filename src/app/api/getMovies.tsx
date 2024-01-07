async function getData() {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.API_TOKEN}`,
		},
	};

	const url: string =
		"https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
	const response: Promise<any> = fetch(url, options)
		.then((response) => response.json())
		.catch((err) => console.error(err));

	return response;
}

export default async function getMovies() {
	const data = await getData();
	return data;
}
