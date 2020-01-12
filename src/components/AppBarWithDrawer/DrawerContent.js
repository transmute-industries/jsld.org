import React from "react";
import PropTypes from "prop-types";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import List from "@material-ui/core/List";

import CodeIcon from "@material-ui/icons/Code";
import HomeIcon from "@material-ui/icons/Home";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";

import history from "../../store/history";

const sideMenuPrimaryItem = [
  {
    label: "Home",
    icon: <HomeIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      history.push("/");
    }
  },
  // {
  //   label: "Keystore",
  //   icon: <VpnKeyIcon />,
  //   showForRoles: ["tier0", "tier1", "tier2"],
  //   onClick: () => {
  //     history.push("/keystore");
  //   }
  // },
  {
    label: "Source",
    icon: <CodeIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      window.open("https://github.com/OR13/jsld.org", "_blank");
    }
  }
];

function DrawerContent({ tmui, setTmuiProp }) {
  const values = {
    currentRole: {
      label: "User",
      value: "tier0"
    }
  };

  return (
    <React.Fragment>
      <List>
        {sideMenuPrimaryItem
          .filter(i => {
            return i.showForRoles.indexOf(values.currentRole.value) !== -1;
          })
          .map(i => (
            <ListItem button key={i.label} onClick={i.onClick}>
              <ListItemIcon>{i.icon}</ListItemIcon>
              <ListItemText primary={i.label} />
            </ListItem>
          ))}
      </List>
    </React.Fragment>
  );
}

DrawerContent.propTypes = {
  tmui: PropTypes.any,
  setTmuiProp: PropTypes.any
};

export default DrawerContent;
