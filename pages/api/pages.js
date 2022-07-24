import { getStrapiURL } from 'utils/api';

export default async (req, res) => {
	try {		
		// Get all pages from Strapi
		const pages = await (await fetch(getStrapiURL('/pages'))).json();

		// Display output to user
		res.status(200).json(pages[0]);
	} catch (e) {
		console.log(e);
		res.send(JSON.stringify(e));
	}
};
