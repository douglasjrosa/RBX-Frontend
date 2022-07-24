import Container from 'components/elements/main-container';
import { slug } from 'data/pages/embalagem-padrao-exportacao';

export const config = { amp: 'hybrid' };

const Hello = () => {
	return (
		<Container slug={slug}>
			<div className="flex flex-col">
				<h1>Hello World!</h1>
			</div>
		</Container>
	);
};

export default Hello;
