import { getStrapiURL } from 'utils/api';

export default async (req, res) => {
	try {

		// Get all global from Strapi
		const global = await (await fetch(getStrapiURL('/global'))).json();

		// Display output to user
		res.status(200).json(global);
	} catch (e) {
		console.log(e);
		res.send(JSON.stringify(e));
	}
};
