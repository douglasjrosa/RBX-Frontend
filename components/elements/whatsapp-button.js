import Image from './image';

const WhatsAppButton = (props) => {
	const { media } = props;

	return (
		<div className="fixed bottom-24 right-5">
			<div>
				<button
					type="button"
					className="shadow"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
				>
					<Image media={media} width="80" height="80" />
				</button>
			</div>
		</div>
	);
};

export default WhatsAppButton;
