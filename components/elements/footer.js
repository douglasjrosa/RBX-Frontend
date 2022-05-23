import Image from './image';
import PropTypes from 'prop-types';
import { linkPropTypes, mediaPropTypes } from 'utils/types';
import CustomLink from './custom-link';

const Footer = ({ footer }) => {
	return (
<<<<<<< HEAD
		<footer className="bg-opacity-90 bg-green-900 relative">
=======
		<footer className="bg-opacity-90 bg-green-900 z-20">
>>>>>>> 7a17585de6cdeed51efbc2661231ef2c185a9ca4
			<div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-12">
				{footer.columns.map((footerColumn) => (
					<div key={footerColumn.id} className="col mt-10 lg:mt-0">
						<p className="uppercase tracking-wide font-semibold  text-white">
							{footerColumn.title}
						</p>
						<ul className="mt-2 px-5">
							{footerColumn.links.map((link) => (
								<li
									key={link.id}
									className="py-3 lg:py-2 text-2xl lg:text-xl mx-1 text-green-200 hover:text-green-400"
								>
									<CustomLink link={link}>
										{link.text}
									</CustomLink>
								</li>
							))}
						</ul>
					</div>
				))}
				<div key="ht">
					<div className="rounded p-6 h-auto w-auto text-center bg-white">
						{footer.logo && (
							<Image
								media={footer.logo}
								className="bg-opacity-75 object-contain"
								width="200"
								height="105"
							/>
						)}
					</div>
				</div>
			</div>
			<div className="text-sm bg-black bg-opacity-40 py-6 text-green-400">
				<div className="container">{footer.smallText}</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	footer: PropTypes.shape({
		logo: mediaPropTypes.isRequired,
		columns: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
					.isRequired,
				title: PropTypes.string.isRequired,
				links: PropTypes.arrayOf(linkPropTypes)
			})
		),
		smallText: PropTypes.string.isRequired
	})
};

export default Footer;
