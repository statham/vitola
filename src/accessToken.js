import store from "react-native-simple-store";
import { CONFIG } from "./resources";


export const saveSessionToken = sessionToken =>
  store.save(CONFIG.SESSION_TOKEN_KEY, { sessionToken });
