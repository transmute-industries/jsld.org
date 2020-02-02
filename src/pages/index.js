import HomePage from "./HomePage";

import DIDs from "./DIDs";
import LinkedDataProofs from "./LinkedDataProofs";
import EncryptedDataVaults from "./EncryptedDataVaults";

import AgricultureFutures from "./AgricultureFutures";

import IncidentResponse from "./IncidentResponse";
// import KeystorePage from "./KeystorePage";

export const PAGES = [
  { path: "/", exact: true, component: HomePage },
  { path: "/did", exact: true, component: DIDs },
  { path: "/vc", exact: true, component: LinkedDataProofs },
  { path: "/edv", exact: true, component: EncryptedDataVaults },
  {
    path: "/case-study-agriculture-futures",
    exact: true,
    component: AgricultureFutures
  },
  {
    path: "/case-study-incident-response",
    exact: true,
    component: IncidentResponse
  }
  // { path: "/keystore", exact: true, component: KeystorePage }
];
