import Markdown from "react-markdown";
import classNames from "classnames";
import { MdClose } from "react-icons/md";

const NotificationBanner = ({ data: { text, type }, closeSelf }) => {
  return (
    <div
      className={classNames(
        // Common classes
        "text-white px-2 py-2 fixed w-full z-40 py-3 bottom-0",
        {
          // Apply theme based on notification type
          "bg-blue-600": type === "info",
          "bg-orange-600": type === "warning",
          "bg-red-600": type === "alert",
        }
      )}
    >
      <div className="container flex flex-row justify-between items-center ">
        <div className="rich-text-banner flex-1 text-xl">
          <Markdown children={text} />
        </div>
        <button
          onClick={closeSelf} 
          className="px-1 py-1 flex-shrink-0" 
          aria-label="Fechar notificação de cookies"
        >
          <MdClose className="h-6 w-auto" color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
