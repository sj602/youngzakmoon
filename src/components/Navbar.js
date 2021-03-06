import React, { useState } from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import MicIcon from "@material-ui/icons/Mic";
import ScoreIcon from "@material-ui/icons/Score";

const Navbar = () => {
  const [screen, setScreen] = useState();

  const classes = useStyles();

  return (
    <div style={{ display: "flex" }}>
      <BottomNavigation
        value={screen}
        onChange={(event, value) => {
          console.log(value);
          setScreen(value);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="홈"
          component={Link}
          to="/"
          value=""
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/text"
          label="텍스트 모드"
          value="text"
          icon={<MessageIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/image"
          label="이미지 모드"
          value="image"
          icon={<WallpaperIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/voice"
          label="보이스 모드"
          value="voice"
          icon={<MicIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/ranking"
          label="랭킹 보기"
          value="ranking"
          icon={<ScoreIcon />}
        />
      </BottomNavigation>
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

export default Navbar;
