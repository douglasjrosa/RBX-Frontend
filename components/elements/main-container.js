import { useState, useEffect } from 'react';

const Container = ({ children, slug }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const mainPages = ['', 'empresa', 'produtos', 'informacoes', 'contato'];
	const theme = mounted
		? mainPages.includes(slug)
			? 'bg-rbx-porto bg-fixed bg-cover py-36'
			: 'bg-rbx-wood bg-repeat py-36'
		: 'bg-[#E3C486] py-36';

	return (
		<div id="main-container" className={theme}>
			{children}
		</div>
	);
};
export default Container;
