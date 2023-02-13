import { useState } from "react";
import { useDispatch } from "react-redux";
import { Login } from "../rtk/slices/auth-slice";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const dispatch = useDispatch();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/signup", {
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
      dispatch(Login(json));

      // update loading state
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
