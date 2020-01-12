import React from "react";

import HomeIcon from "@material-ui/icons/Home";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CodeIcon from "@material-ui/icons/Code";

import history from "../../store/history";

const primarySearchAccountMenuMobile = [
  // {
  //   badgeContent: 0,
  //   ariaLabel: "keystore",
  //   icon: <VpnKeyIcon />,
  //   label: "Keystore",
  //   onClick: () => {
  //     history.push("/keystore");
  //   }
  // },
  {
    badgeContent: 0,
    ariaLabel: "source",
    icon: <CodeIcon />,
    label: "Source",
    onClick: () => {
      window.open("https://github.com/OR13/jsld.org", "_blank");
    }
  },
  {
    badgeContent: 0,
    ariaLabel: "home",
    icon: <HomeIcon />,
    label: "Home",
    onClick: () => {
      history.push("/");
    }
  }
];

export default primarySearchAccountMenuMobile;
