import { fetchAPI } from "utils/api";

export default async function Global(req, res){
	const global = await fetchAPI('/global');
	res.json(global);
}