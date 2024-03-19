import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";
import config from "../config/config";

const nodeApi = createApi({
  baseQuery,
  reducerPath: "nodeApi",
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        method: "GET",
        url: /auth/get,
      }),
      providesTags: ["User"],
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled;
          dispatch(setUser(response.data.user));
        } catch (error) {
            // toast.error(error.error.data ? error.error.data.msg : config.ERROR);
        }
      },
    }),
}),
});

export const {
  useGetUserQuery,
} = nodeApi;

export default nodeApi
