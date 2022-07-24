import Navbar from './elements/navbar';
import Footer from './elements/footer';
import NotificationBanner from './elements/notification-banner';
import { useState, useEffect } from 'react';
import WhatsAppButton from './elements/whatsapp-button';
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
		setTimeout(() => {
			setMounted(true);
		}, 5000);
	}, []);

	return (
		<div className="flex flex-col justify-between ">
			<div className="flex-1">
				<div className="fixed w-full z-50">{mounted && <Navbar />}</div>
				<div className="relative z-10">{children}</div>
			</div>
			{mounted && <Footer />}
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
