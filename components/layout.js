import Navbar from './elements/navbar';
import Footer from './elements/footer';
import NotificationBanner from './elements/notification-banner';
import { useState } from 'react';
import WhatsAppButton from './elements/whatsapp-button';

const Layout = (params) => {
	
	const { children, global } = params;
	const {
		navbar,
		footer,
		notificationBanner,
		whatsappImage,
		whatsappContacts,
		whatsappMsg
	} = global;

	const [bannerIsShown, setBannerIsShown] = useState(true);

	return (
				<div className="flex flex-col justify-between ">
					<div className="flex-1">
						<div className="fixed w-full z-50">
							<Navbar navbar={navbar} />
						</div>
						<div className="relative z-10">
							{children}
						</div>
					</div>
					<Footer footer={footer} />
					{whatsappImage &&
						whatsappContacts.length &&
						whatsappMsg && (
							<WhatsAppButton
								media={whatsappImage}
								contatos={whatsappContacts}
								msg={whatsappMsg}
							/>
						)}
					{notificationBanner && bannerIsShown && (
						<NotificationBanner
							data={notificationBanner}
							closeSelf={() => setBannerIsShown(false)}
						/>
					)}
				</div>
	);
};

export default Layout;
