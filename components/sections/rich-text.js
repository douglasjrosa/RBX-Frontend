import Markdown from 'react-markdown';

const RichText = ({ data }) => {
	
	return (
		<div
			className="container prose-lg max-w-4xl z-20 bg-white rounded-lg shadow-lg p-12 richText-rbx block"
		>
			<Markdown
				components={{
					img: ({ node, ...props }) => {	
						const { src, alt } = props;
						return (
							<span className="text-center block">
								<img
									src={src}
									alt={alt}
									width={400}
									height={300}
								/>
							</span>
						);
					},
					a: ({ node, ...props }) => {
						return <a className='text-blue-600 hover:underline' {...props} />
					}
				}}
			>
				{data.content}
			</Markdown>
		</div>
	);
};

export default RichText;