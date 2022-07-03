import Markdown from 'react-markdown';
import { useAmp } from 'next/amp';

const RichText = ({ data }) => {
	const isAmp = useAmp();

	console.log(data);

	return (
		<div
			id="rich-text"
			className="container card-rbx prose-lg max-w-[90vw] bg-white rounded-lg shadow-lg p-12 block"
		>
			<Markdown
				components={{
					img: ({ node, ...props }) => {
						const { src, alt } = props;
						return (
							<span className="text-center block">
								{isAmp ? (
									<amp-img
										src={src}
										alt={alt}
										width={400}
										height={300}
										layout='responsive'
									/>
								) : (
									<img
										src={src}
										alt={alt}
										width={400}
										height={300}
									/>
								)}
							</span>
						);
					},
					a: ({ node, ...props }) => {
						return (
							<a
								className="text-blue-600 hover:underline"
								{...props}
							/>
						);
					}
				}}
			>
				{data.content}
			</Markdown>
		</div>
	);
};

export default RichText;
