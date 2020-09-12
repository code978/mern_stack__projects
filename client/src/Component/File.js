import React, { useState, useEffect } from "react";
import { Input } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";

const File = (props) => {
  const { getFile } = props;

  const [file, setfiles] = useState([]);
  useEffect(() => {
    getFile(file);
  });
  return (
    <Input
      type="file"
      required
      style={{ margin: "24px", color: purple }}
      onChange={(e) => {
        setfiles(e.target.files[0]);
      }}
    />
  );
};

export default File;
