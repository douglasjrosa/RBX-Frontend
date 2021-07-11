import Navbar from "./elements/navbar";
import Footer from "./elements/footer";
import NotificationBanner from "./elements/notification-banner";
import { useState } from "react";

const Layout = ({ children, global }) => {
  const { navbar, footer, notificationBanner } = global;

  const [bannerIsShown, setBannerIsShown] = useState(true);

  return (
    <div className="flex flex-col justify-between min-h-screen bg-rbx-forest bg-center bg-cover">
      {/* Aligned to the top */}
      <div className="flex-1">
        <div className="fixed w-full">
          {notificationBanner && bannerIsShown && (
            <NotificationBanner
              data={notificationBanner}
              closeSelf={() => setBannerIsShown(false)}
            />
          )}
          <Navbar navbar={navbar} />
        </div>
        <div className="my-28">{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  );
};

export default Layout;
