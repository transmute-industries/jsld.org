import React from "react";
import PropTypes from "prop-types";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";

import CodeIcon from "@material-ui/icons/Code";
import HomeIcon from "@material-ui/icons/Home";
import LockIcon from "@material-ui/icons/Lock";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import PolicyIcon from "@material-ui/icons/Policy";
import history from "../../store/history";

const sideMenuPrimaryItem = [
  {
    label: "Home",
    icon: <HomeIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      history.push("/");
    }
  }
];

const caseStudyMenuItems = [
  {
    label: "Decentralized Identifiers",
    icon: <FingerprintIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      history.push("/did");
    }
  },
  {
    label: "Verifiable Credentials",
    icon: <VerifiedUser />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      history.push("/vc");
    }
  },
  {
    label: "Encrypted Data Vaults",
    icon: <LockIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      history.push("/edv");
    }
  },
  {
    label: "Agriculture Futures",
    icon: <LocalFloristIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      history.push("/case-study-agriculture-futures");
    }
  },
  {
    label: "Incident Response",
    icon: <PolicyIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      history.push("/case-study-incident-response");
    }
  }
];

const miscMenuItems = [
  {
    label: "DIDs",
    icon: <CodeIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      window.open("https://w3c.github.io/did-core/", "_blank");
    }
  },
  {
    label: "VCs",
    icon: <CodeIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      window.open("https://www.w3.org/TR/vc-data-model/", "_blank");
    }
  },
  {
    label: "LD Proofs",
    icon: <CodeIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      window.open("https://w3c-dvcg.github.io/ld-signatures/", "_blank");
    }
  },
  {
    label: "JSON-LD",
    icon: <CodeIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      window.open("https://www.w3.org/TR/json-ld/", "_blank");
    }
  },

  {
    label: "View Source",
    icon: <CodeIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      window.open("https://github.com/OR13/jsld.org", "_blank");
    }
  },
  {
    label: "About Transmute",
    icon: <CodeIcon />,
    showForRoles: ["tier0", "tier1", "tier2"],
    onClick: () => {
      window.open("https://transmute.industries", "_blank");
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
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Case Studies
          </ListSubheader>
        }
      >
        {caseStudyMenuItems
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

      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            External Links
          </ListSubheader>
        }
      >
        {miscMenuItems
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
