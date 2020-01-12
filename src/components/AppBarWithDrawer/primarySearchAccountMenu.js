import history from "../../store/history";

const primarySearchAccountMenu = [
  // {
  //   label: "Keystore",
  //   onClick: () => {
  //     history.push("/keystore");
  //   }
  // },
  {
    label: "Source",
    onClick: () => {
      window.open("https://github.com/OR13/jsld.org", "_blank");
    }
  },
  {
    label: "Home",
    onClick: () => {
      history.push("/");
    }
  }
];

export default primarySearchAccountMenu;
