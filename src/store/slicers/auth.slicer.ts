import { createSlice } from "@reduxjs/toolkit";


interface AuthState {
  token?: string;
  domain?: string;
  logo?: string;
  userName?: string;
  userImage?: string;
  userRole?: string;
  agentInfo?: any;//type stricting left for future
  userId?: number;
  last_logged_in?:string|null;
  isAuthenticated: boolean;
  globalLoading: boolean;
  
}

const initialState: AuthState = {
  token: undefined,
  isAuthenticated: false,
  globalLoading: false,
  userRole: undefined

};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      state.token = undefined;
      state.domain = undefined;
      state.userName = undefined;
      state.userImage = undefined;
      state.userRole = undefined;
      state.last_logged_in=undefined;
      // state.userId = undefined;
      // state.channel = undefined;
      // state.logo = undefined;
      state.isAuthenticated = false;
    },
    signIn: (state, action) => {
      
      const { token , domain, logo, userId, userName, userImage,userRole,last_logged_in } = action.payload;
      state.token = token;
      state.domain = domain;
      state.logo = logo;
      state.userName = userName;
      state.userImage = userImage;
      state.userId = userId;
      state.userRole = userRole;
      state.last_logged_in=last_logged_in
     
      state.isAuthenticated = true;
    },
    setGlobalLoading: (state, action) => {
      state.globalLoading = action.payload;
    },
    setLastLoggedIn:(state, action)=>{
      state.last_logged_in=action.payload
    },
    setAgentInfo: (state, action) => {
      const {agentInfo} =  action.payload;
      state.agentInfo = agentInfo;
    },
    setTokens: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
  },
});

export const { signIn, signOut, setTokens, setAgentInfo, setGlobalLoading,setLastLoggedIn } = AuthSlice.actions;
export default AuthSlice.reducer;
