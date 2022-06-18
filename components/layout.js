import Navbar from './elements/navbar';
import Footer from './elements/footer';
import NotificationBanner from './elements/notification-banner';
import { useState } from 'react';
import WhatsAppButton from './elements/whatsapp-button';
import Loading from '@/components/elements/loading';

const Layout = ({ children, global, bgImage, mounted }) => {
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
			<div className={bgImage}>
				<div className="flex flex-col justify-between ">
					<div className="flex-1">
						<div className="fixed w-full z-50">
							<Navbar navbar={navbar} />
						</div>
						<div className="relative my-36 z-10">
							<div className='h-[85vh] text-center text-7xl text-white py-20 m-5 bg-blue-600 rounded' >Wellcome!!!</div>
							{!mounted && <Loading />}
							{mounted && children}
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
								mounted={mounted}
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
