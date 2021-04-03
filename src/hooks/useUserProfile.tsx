import { useEffect } from "react";
import { useHistory } from "react-router";
import { getUserDetails, auth } from "../apis";
import { useAuthDispatch } from "../context/AuthContext";

export const useUserProfile = () => {
  const history = useHistory();
  const authDispatch = useAuthDispatch();

  useEffect(() => {
    (async () => {
      auth.onAuthStateChanged(async (user) => {
        if (!user) {
          return history.push("/login");
        }
        const profile = await getUserDetails(user.uid);
        authDispatch({ type: "setProfile", payload: profile });
      });
    })();
  }, []);
};
