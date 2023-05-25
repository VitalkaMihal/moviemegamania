import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../firebase";
import { AuthValue } from "types";

interface UserAuthInfo {
  email: string | null;
  isLogin: boolean;
}

const fetchSignUpUser = createAsyncThunk<string | null, AuthValue>(
  "user/fetchSignUpUser",
  async ({ email, password }) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user.email;
  },
);

const fetchSignInUser = createAsyncThunk<any | null, AuthValue>(
  "user/fetchSignInUser",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  },
);

const initialState: UserAuthInfo = {
  email: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state, { payload }) => {});
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.email = payload;
      state.isLogin = true;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {});
    builder.addCase(fetchSignInUser.pending, (state, { payload }) => {});
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      if (payload._tokenResponse) {
        state.isLogin = true;
      }
      console.log(state.isLogin);
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {});
  },
});

export default userSlice.reducer;

export { fetchSignUpUser, fetchSignInUser };
