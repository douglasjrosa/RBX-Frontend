import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AmpStyles } from '../styles/amp-styles';

const MyDocument = () => {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

MyDocument.getInitialProps = async (ctx) => {
	const initialProps = await Document.getInitialProps(ctx);
	let isAmp = false;
	initialProps.head.map((prop) => {
		if (prop.props.isAmp) isAmp = true;
	});
	return {
		...initialProps,
		styles: (
			<>
				{initialProps.styles}
				{isAmp && <style dangerouslySetInnerHTML={AmpStyles}></style>}
			</>
		)
	};
};

export default MyDocument;
