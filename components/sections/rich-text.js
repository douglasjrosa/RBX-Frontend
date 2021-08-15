import PropTypes from "prop-types";
import Markdown from "react-markdown";
import Image from "../elements/image";

const RichText = ({ data }) => {
  return (
    <div className="container prose-lg max-w-4xl bg-white rounded-lg shadow-lg p-12 richText-rbx">
      <Markdown
        components={{ img: ({node, ...props}) => {
          return (
            <Image
                media={{url: props.src, alternativeText: props.alt}}
                width="400"
                height="300"
            />
          )
        }}}
      >
        {data.content}
      </Markdown>
    </div>
  );
};

RichText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
};

export default RichText;
