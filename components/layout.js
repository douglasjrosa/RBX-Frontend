import Navbar from "./elements/navbar";
import Footer from "./elements/footer";
import NotificationBanner from "./elements/notification-banner";
import { useState } from "react";
import WhatsAppButton from "./elements/whatsapp-button";


const Layout = ({ children, global }) => {
  const { navbar, footer, notificationBanner } = global;

  const [bannerIsShown, setBannerIsShown] = useState(true);
  const whatsappImage = {...global.whatsappImage};

  return (
    <div className="min-h-screen bg-rbx-porto bg-fixed bg-center bg-cover">
      <div className="flex flex-col justify-between min-h-screen bg-white bg-opacity-30">
        {/* Aligned to the top */}
        <div className="flex-1">
          <div className="fixed w-full z-50">
            <Navbar navbar={navbar} />
          </div>
          <div className="my-36">{children}</div>
        </div>
        {/* Aligned to the bottom */}
        <Footer footer={footer} />
        {global.whatsappImage && global.whatsappContacts[0] && (
          <WhatsAppButton
            media={whatsappImage}
            contatos={global.whatsappContacts}
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
