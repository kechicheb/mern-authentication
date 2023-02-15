import { useState } from "react";
import { authLogin } from "../rtk/slices/auth-slice";
import { setWorkouts } from "../rtk/slices/workout-slice";
import { useDispatch } from "react-redux";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch(authLogin(json));

      //In order not to see workouts of the user who was logged in before you
      dispatch(setWorkouts(null));
      // update loading state
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
