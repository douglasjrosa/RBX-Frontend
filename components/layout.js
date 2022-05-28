import Navbar from './elements/navbar';
import Footer from './elements/footer';
import NotificationBanner from './elements/notification-banner';
import { useState, useEffect } from 'react';
import WhatsAppButton from './elements/whatsapp-button';
import Image from '@/components/elements/image';

const Layout = ({ children, global }) => {
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
		<div>
			<div className="bg-rbx-wood bg-fixed bg-repeat">
				<div className='fixed w-full h-full bg-white opacity-10 z-0' ></div>
				<div className="flex flex-col justify-between ">

				{/* Aligned to the top */}
				<div className="flex-1">
					<div className="fixed w-full z-50">
						<Navbar navbar={navbar} />
					</div>
					<div className="relative my-36 z-10">{children}</div>
				</div>
				{/* Aligned to the bottom */}
				<Footer footer={footer} />
				{whatsappImage && whatsappContacts.length && whatsappMsg && (
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
			</div>
		</div>
	);
};

export default Layout;
