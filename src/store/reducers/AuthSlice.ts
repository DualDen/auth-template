import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IUser } from "../../models/models"
import { login } from "./AC"

interface IAuthState {
  isAuth: boolean,
  user: IUser,
  isAuthLoading: boolean,
  authError: string | null
}
const initialState: IAuthState = {
    isAuth: false,
    user: {} as IUser,
    isAuthLoading: false,
    authError: null,
}

export const authSlice = createSlice({
name : "auth",
initialState,
reducers: {
setIsAuthLoading : (state: IAuthState,action:PayloadAction<boolean>) => {
    state.isAuthLoading = action.payload;
},
setAuthError: (state:IAuthState,action:PayloadAction<string>) => {
    state.authError = action.payload;
},
setAuth: (state:IAuthState, action:PayloadAction<boolean>) => {
    state.isAuth = action.payload;
},
setUser: (state:IAuthState, action:PayloadAction<IUser>) => {
    state.user = action.payload;
}
},
extraReducers: builder => {
    builder.addCase(login.pending, (state) => {
        state.isAuthLoading = true;
    });
    builder.addCase(login.fulfilled, (state:IAuthState,action:PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isAuth = true;
        state.isAuthLoading = false;
    });
    builder.addCase(login.rejected, (state:IAuthState,action:PayloadAction<any>) => {
        state.authError = action.payload;
        state.isAuthLoading = false;
    })
}
})

export default authSlice.reducer;
export const {setAuth,setAuthError,setIsAuthLoading,setUser} = authSlice.actions;