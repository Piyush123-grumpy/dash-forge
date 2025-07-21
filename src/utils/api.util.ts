import { useAppSelector } from "@/store/hooks";
import { setGlobalLoading, signOut } from "@/store/slicers/auth.slicer";
import axios from "axios";

import { useDispatch } from "react-redux";

export const useApiClient = () => {
  const { token, domain } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();

  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const instance = axios.create({
    baseURL: token
      ? domain + "/api/agents/"
      : `${import.meta.env.VITE_API_URL}`,
    // baseURL: `${import.meta.env.VITE_API_URL}`,
    headers,
  });

  // const refreshAccessToken = async () => {
  //   const { data } = await instance.post("/auth/refresh", {
  //     refreshToken: refreshToken,
  //   });
  //   dispatch(setTokens(data));
  //   return data.accessToken;
  // };
  // instance.interceptors.request.use((config)=>{
  //   config.cancelToken = cancelToken.signal
  // })
  instance.interceptors.request.use((config) => {
    // Dispatch a loading action when a request is made
    dispatch(setGlobalLoading(true));
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      dispatch(setGlobalLoading(false));
      return response;
    },
    (error) => {
      dispatch(setGlobalLoading(false));
      console.log(error);
      // const originalRequest = error.config;
      if (error.response.status === 401) {
        dispatch(signOut());
      }
      // if (error.response.status === 401 && !originalRequest._retry) {
      //   originalRequest._retry = true;
      //   return refreshAccessToken()
      //     .then((token) => {
      //       originalRequest.headers.Authorization = `Bearer ${token}`;
      //       return axios(originalRequest);
      //     })
      //     .catch(() => {
      //       dispatch(signOut());
      //     });
      // }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const makeParams = (params: object) => {
  Object.keys(params).forEach((k) => params[k] == null && delete params[k]);
  return params;
};
