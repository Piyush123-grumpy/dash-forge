import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import sidebarReducer from "./slicer/sidebar.slicer";
import authReducer from "./slicers/auth.slicer";
import { PERSIST, PURGE,REHYDRATE } from "redux-persist/es/constants";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

const persistConfig = {
  key: "Service-management",
  storage,
};

const reducers = combineReducers({
//   sidebar: sidebarReducer,
  auth: authReducer,

});

const persistedReducer = persistReducer(persistConfig, reducers);

const reduxStateSyncConfig = {
  predicate: (action: { type: any; }) => {
    const blacklist = [PERSIST, PURGE, REHYDRATE];
    if (typeof action !== "function") {
      if (Array.isArray(blacklist)) {
        return blacklist.indexOf(action.type) < 0;
      }
    }
    return false;
  },
};

const stateSyncMiddleware = createStateSyncMiddleware(reduxStateSyncConfig) as Middleware< // 👈 fix here
  {}, 
  ReturnType<typeof persistedReducer>
>;

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // still recommended with redux-persist
    }).concat(stateSyncMiddleware), // ✅ type-safe now
});

initMessageListener(store);

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
