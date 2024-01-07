"use client";

import Image from "next/image";

const Card = ({ title, image }: { title: string; image: string }) => {
	return (
		<div className="p-5">
			<h2 className="text-wrap py-3 uppercase">{title}</h2>
			<Image src={"https://image.tmdb.org/t/p/w500" + image} alt={title} />
		</div>
	);
};

export default Card;
