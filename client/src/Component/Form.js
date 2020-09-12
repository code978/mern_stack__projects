import React, { useState } from "react";
import Name from "./Name";
import { Box, Paper, Container, Button } from "@material-ui/core";
import Birthday from "./Birthday";
import CountryPicker from "./CountryPicker";
import File from "./File";

const Form = () => {
  const [name, setname] = useState();
  const [birthday, setbirthday] = useState();
  const [country, setcountry] = useState();
  const [file, setfile] = useState([]);

  const getName = (props) => {
    setname(props);
  };

  const getBirthday = (props) => {
    setbirthday(props);
  };

  const getCountries = (props) => {
    setcountry(props);
  };

  const getFile = (props) => {
    setfile(props);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form method="POST" onSubmit={onSubmit}>
        <div className="Form">
          <Container variant="xm">
            <Box m={6} p={2}>
              <Paper elevation={10} p={40}>
                <Name getName={getName} />

                <div className="Country">
                  <Birthday getBirthday={getBirthday} />
                  <CountryPicker getCountries={getCountries} />
                  <File getFile={getFile} />
                </div>
                <Button
                  type="submit"
                  style={{
                    display: "flex",
                    marginLeft: "75px",
                    paddingBottom: "8px"
                  }}
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Paper>
            </Box>
          </Container>
        </div>
      </form>
    </>
  );
};

export default Form;
