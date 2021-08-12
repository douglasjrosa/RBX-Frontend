import PropTypes from "prop-types";
import Markdown from "react-markdown";

const RichText = ({ data }) => {

  return (
    <div className="container prose-lg max-w-4xl bg-white rounded-lg shadow-lg p-12 richText-rbx">
      <Markdown
        components={{ img: ({node, ...props}) => <img {...props} width="400" height="300"/> }}
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
