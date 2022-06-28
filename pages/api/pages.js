import { fetchAPI } from "utils/api";

export default async function Pages(req, res){
	const pages = await fetchAPI('/pages');
	res.json(pages);
}