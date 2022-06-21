import { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import MobileNavMenu from './mobile-nav-menu';
import ButtonLink from './button-link';
import Image from './image';
import { getButtonAppearance } from 'utils/button';
import CustomLink from './custom-link';

const Navbar = ({ navbar }) => {
	const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);

	return (
		<>
			{/* The actual navbar */}
			<nav
				style={{ boxShadow: 'rgba(0,0,0,0.25) 0px 10px 15px' }}
				className="py-6 sm:py-3 bg-white"
			>
				<div className="container flex flex-row items-center justify-between">
					{/* Content aligned to the left */}
					<div id="logo-and-links" className="flex flex-row items-center">
						<Link href="/[[...slug]]" as="/">
							<a
								id="nav-logo"
								aria-label="Página inicial"
								className="w-[150px]"
							>
								<Image
									media={navbar.logo}
									className="h-10 w-auto object-contain"
									alt="Logomarca Ribermax"
									width="150"
									height="39"
								/>
							</a>
						</Link>
						{/* List of links on desktop */}
						<ul className="hidden list-none md:flex flex-row gap-4 items-baseline ml-10 text-lg">
							{navbar.links.map((navLink, index) => (
								<li key={`navKey${index}`}>
									<CustomLink link={navLink}>
										<div className="hover:text-gray-900 px-2 py-1">
											{navLink.text}
										</div>
									</CustomLink>
								</li>
							))}
						</ul>
					</div>
					{/* Hamburger menu on mobile */}
					<button
						onClick={() => setMobileMenuIsShown(true)}
						className="p-1 block md:hidden"
						aria-label="Menu principal"
					>
						<MdMenu className="h-8 w-auto" />
					</button>
					{/* CTA button on desktop */}
					{navbar.button && (
						<div id="nav-button" className="hidden md:block">
							<ButtonLink
								button={navbar.button}
								appearance={getButtonAppearance(
									navbar.button.type,
									'light'
								)}
								compact
								aria-label="Menu principal"
							/>
						</div>
					)}
				</div>
			</nav>

			{/* Mobile navigation menu panel */}
			{mobileMenuIsShown && (
				<MobileNavMenu
					navbar={navbar}
					closeSelf={() => setMobileMenuIsShown(false)}
					aria-label="Fechar menu principal"
				/>
			)}
		</>
	);
};

export default Navbar;
