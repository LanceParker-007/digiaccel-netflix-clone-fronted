import { createContext } from "react";

// Create the UserContext
const UserContext = createContext({
  user: null,
  setUser: () => {},
});

export default UserContext;
