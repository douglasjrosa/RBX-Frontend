import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
const Navbar = dynamic(() => import('./elements/navbar'), { suspense: true });
const Footer = dynamic(() => import('./elements/footer'), { suspense: true });
const NotificationBanner = dynamic(
	() => import('./elements/notification-banner'),
	{ suspense: false }
);
const WhatsAppButton = dynamic(() => import('./elements/whatsapp-button'), {
	suspense: false
});
import {
	notificationBanner,
	whatsappImage,
	whatsappContacts,
	whatsappMsg
} from 'data/global';

const Layout = ({ children }) => {
	const [bannerIsShown, setBannerIsShown] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	return (
		<div className="flex flex-col justify-between ">
			<div className="flex-1">
				<div className="fixed w-full z-50">{mounted && <Navbar />}</div>
				<div className="relative z-10">{children}</div>
			</div>
			<Suspense fallback={`Loading...`}>
				<Footer />
			</Suspense>
			{mounted &&
				whatsappImage &&
				whatsappContacts.length &&
				whatsappMsg && (
					<WhatsAppButton
						media={whatsappImage}
						contatos={whatsappContacts}
						msg={whatsappMsg}
					/>
				)}
			{mounted && notificationBanner && bannerIsShown && (
				<NotificationBanner
					data={notificationBanner}
					closeSelf={() => setBannerIsShown(false)}
				/>
			)}
		</div>
	);
};

export default Layout;
