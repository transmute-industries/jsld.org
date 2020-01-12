import { withHandlers } from "recompose";
import { Ed25519KeyPair } from "crypto-ld";
import didMethodKey from "did-method-key";
import DIDWallet from "@transmute/did-wallet";

const { keyToDidDoc } = didMethodKey.driver();

export default withHandlers({
  doImportKeystore: ({ setKeystoreProp }) => async data => {
    setKeystoreProp({
      keystore: { data }
    });
  },
  doCreateWalletKeystore: ({ setKeystoreProp }) => async () => {
    const ed25519Key = await Ed25519KeyPair.generate();
    const doc = keyToDidDoc(ed25519Key);
    const wall = DIDWallet.create({
      keys: [
        {
          type: "assymetric",
          encoding: "base58",
          didPublicKeyEncoding: "publicKeyBase58",
          publicKey: ed25519Key.publicKeyBase58,
          privateKey: ed25519Key.privateKeyBase58,
          tags: ["Ed25519VerificationKey2018", doc.id, "web"],
          notes: ""
        }
      ]
    });
    setKeystoreProp({
      keystore: {
        data: {
          keys: wall.keys
        }
      }
    });
  },
  doUpdateKeystore: ({ setKeystoreProp }) => async keystoreString => {
    const wall = DIDWallet.create({
      keys: Object.values(JSON.parse(keystoreString))
    });
    setKeystoreProp({
      keystore: {
        data: {
          keys: wall.keys
        }
      }
    });
  },
  doDeleteKeystore: ({ setKeystoreProp }) => async () => {
    setKeystoreProp({
      keystore: null
    });
  },
  doToggleKeystore: ({ keystore, setKeystoreProp }) => async password => {
    setKeystoreProp({ loading: true });
    try {
      let message;
      if (typeof keystore.keystore.data === "string") {
        const wall = DIDWallet.create(keystore.keystore.data);
        wall.unlock(password);
        setKeystoreProp({
          keystore: {
            data: {
              keys: wall.keys
            }
          }
        });
        message = "Unlocked keystore.";
      } else {
        const wall = DIDWallet.create({
          keys: Object.values(keystore.keystore.data.keys)
        });
        wall.lock(password);
        setKeystoreProp({
          keystore: {
            data: wall.ciphered
          }
        });
        message = "Locked keystore.";
      }
      console.log(message);
    } catch (e) {
      console.error(e);
    }
    setKeystoreProp({ loading: false });
  }
});
