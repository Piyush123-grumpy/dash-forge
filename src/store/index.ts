import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import sidebarReducer from "./slicers/sidebar.slicer";
import authReducer from "./slicers/auth.slicer";
import googleReducer from "./slicers/googlemap.slicer";
import thunk from "redux-thunk";
import meReducer from "@/store/slicers/me.slicer";
import pusherReducer from "@/store/slicers/pusher.slicer";
import campaginReducer from "@/store/slicers/campaign.slicer";
import { PERSIST, PURGE,REHYDRATE } from "redux-persist/es/constants";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

const persistConfig = {
  key: "promt",
  storage,
};

const reducers = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
  me: meReducer,
  googlemap: googleReducer,
  campaign: campaginReducer,
  pusher: pusherReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const reduxStateSyncConfig = {
  predicate: (action) => {
    const blacklist = [PERSIST, PURGE, REHYDRATE];
    if (typeof action !== "function") {
      if (Array.isArray(blacklist)) {
        return blacklist.indexOf(action.type) < 0;
      }
    }
    return false;
  },
};
const stateSyncMiddleware = createStateSyncMiddleware(reduxStateSyncConfig);
// const stateSyncMiddleware = createStateSyncMiddleware({});
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, stateSyncMiddleware],
});

initMessageListener(store);

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
