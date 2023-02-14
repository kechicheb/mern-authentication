import { useDispatch } from "react-redux";
import { authLogout } from "../rtk/slices/auth-slice";
import { setWorkouts } from "../rtk/slices/workout-slice";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch(authLogout());
    dispatch(setWorkouts(null));
  };

  return { logout };
};
