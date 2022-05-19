import Navbar from './elements/navbar';
import Footer from './elements/footer';
import NotificationBanner from './elements/notification-banner';
import { useState } from 'react';
import WhatsAppButton from './elements/whatsapp-button';
import Image from 'next/image';
import porto from '@/public/images/porto_de_santos.jpg';

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
			<div className="flex flex-col justify-between min-h-screen bg-white bg-opacity-30">
				{/* Aligned to the top */}
				<div className="flex-1">
					<div className="fixed z-0 bg-rbx" >
						<Image src={porto} />
					</div>
					<div className="fixed w-full z-50">
						<Navbar navbar={navbar} />
					</div>
					<div className="my-36 z-10">{children}</div>
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
	);
};

export default Layout;
