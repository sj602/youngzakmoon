import React from "react";
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const TextScreen = () => {
  const classes = useStyles;

  return (
    <div>
      <Navbar />
      <p>텍스트스크린</p>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="" variant="outlined" />
      </form>
      <Button variant="contained" color="primary">
        확인
      </Button>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

export default TextScreen;
