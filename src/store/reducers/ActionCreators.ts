// import { IUser } from "../../models/models";
// import { AppDispatch } from "../store";
// import axios from "axios";
// import { setAuth, setAuthError, setIsAuthLoading, setUser } from "./AuthSlice";

// export const login = (username:string,password: string) => async (dispatch: AppDispatch) => {
//     try{
//         dispatch(setIsAuthLoading(true));
//         const response = await axios.get<IUser[]>('./users.json');
//         const user = response.data.find(user => user.username === username && user.password === password);
//         dispatch(setIsAuthLoading(false));
//         dispatch(setAuth(true));
//         if(user) {
//             dispatch(setUser(user));
//         }
//         else{
//             dispatch(setAuthError("Пользователь не найден"));
//         }
//         console.log(user);
//     }
//     catch (e) {
//         dispatch(setAuthError("Ошибка при логине"));
//         console.log(e)
//     }
// }
export const ten = 10;