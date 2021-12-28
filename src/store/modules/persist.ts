import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "@baseApp",
  storage,
  whitelist: ["example"],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers: any) => {
  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};
