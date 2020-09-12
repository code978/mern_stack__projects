import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";

const Birthday = (props) => {
  const { getBirthday } = props;

  const [birthday, setbirthday] = useState();

  useEffect(() => {
    getBirthday(birthday);
  });
  return (
    <>
      <TextField
        name="date"
        id="date"
        style={{ width: "300", textAlign: "center" }}
        label="Birthday"
        type="date"
        required
        InputLabelProps={{ shrink: true }}
        onChange={(e) => {
          setbirthday(e.target.value);
        }}
        fullWidth
      />
    </>
  );
};

export default Birthday;
