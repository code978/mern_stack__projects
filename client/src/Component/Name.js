import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";

const Name = (props) => {
  const { getName } = props;
  const [name, setname] = useState();

  useEffect(() => {
    getName(name);
  });

  return (
    <>
      <TextField
        style={{
          paddingTop: 20,
          marginLeft: 30,
          textAlign: "center"
        }}
        required
        onChange={(e) => {
          setname(e.target.value);
        }}
        id="searchInput"
        label="Enter the Name"
        margin="normal"
      />
    </>
  );
};

export default Name;
