async function getData() {
	const api_key: string = `cb3cfca375b67807e1dcbe36bda1afc3`;
	const base_url: string = "https://api.themoviedb.org/3/tv/popular";
	const endpoint: string = `${base_url}?api_key=cb3cfca375b67807e1dcbe36bda1afc3&language=en-US&page=1`;

	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.API_TOKEN}`,
		},
	};

	try {
		const response = await fetch(endpoint, options);

		if (!response.ok) {
			throw new Error(`Failed to fetch data, status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (err) {
		console.error(err);
		throw err;
	}
}

export default async function getMovies() {
	try {
		const data = await getData();
		return data;
	} catch (err) {
		console.error(err);
		throw err;
	}
}
