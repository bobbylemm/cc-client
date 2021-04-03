import React from "react";

type Action = { type: "login" | "logout" | "setProfile"; payload: any };
type Dispatch = (action: Action) => void;
type State = {
  loggedIn: boolean;
  profile: {
    email: string;
    name: string;
    phone: string;
    uid: string;
  };
};
type AuthProviderProps = { children: React.ReactNode };
const AuthStateContext = React.createContext<State | undefined>(undefined);
const AuthDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "login": {
      return { ...state, loggedIn: true };
    }
    case "logout": {
      return { ...state, loggedIn: false };
    }
    case "setProfile": {
      return { ...state, profile: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = React.useReducer(authReducer, {
    loggedIn: false,
    profile: {
      email: "",
      name: "",
      phone: "",
      uid: "",
    },
  });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }
  return context;
};

const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthState, useAuthDispatch };
