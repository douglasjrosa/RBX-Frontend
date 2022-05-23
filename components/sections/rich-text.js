import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import Image from '../elements/image';

const RichText = ({ data }) => {
	return (
		<div
			className="container prose-lg max-w-4xl bg-white rounded-lg shadow-lg p-12 richText-rbx block"
		>
			<Markdown
				components={{
					img: ({ node, ...props }) => {	
						const { src, alt } = props;
						return (
							<span className="text-center block">
								<Image
									media={{
										url: src,
										name: alt,
										alternativeText: alt,
										mime: "none",
										id: "none"
									}}
									width="400"
									height="300"
								/>
							</span>
						);
					}
				}}
			>
				{data.content}
			</Markdown>
		</div>
	);
};

RichText.propTypes = {
	data: PropTypes.shape({
		content: PropTypes.string
	})
};

export default RichText;
