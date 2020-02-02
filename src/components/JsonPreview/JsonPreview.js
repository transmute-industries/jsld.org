import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line
import brace from "brace";
import AceEditor from "react-ace";

// eslint-disable-next-line
import "brace/mode/json";
// eslint-disable-next-line
import "brace/theme/github";

class JsonPreview extends React.Component {
  render() {
    const { value, onChange, style, readOnly } = this.props;

    return (
      <AceEditor
        mode="json"
        theme="github"
        style={{ width: "100%", ...style }}
        onChange={onChange}
        name="Json Preview"
        readOnly={readOnly}
        value={value}
        editorProps={{ $blockScrolling: Infinity }}
      />
    );
  }
}

JsonPreview.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default JsonPreview;
