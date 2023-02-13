import { useDispatch } from "react-redux";
import { Logout } from "../rtk/slices/auth-slice";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch(Logout());
  };

  return { logout };
};
