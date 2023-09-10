import React from "react";

export const AuthenticatedUser = React.createContext();

export const AuthenticatedUserProvider = (props) => {
  const [user, setUser] = React.useState({
    uid: '123',
    name: "Guest",
    loggedIn: false,
  });
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);


  // When User changes state Log Out or Log In
  React.useEffect(() => {
    if (user.loggedIn) {
      // user logged in successfully

      // save user in localStorage
      localStorage.setItem('user', JSON.stringify(user))

      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false); // so we stay logged in for dev
    }
  }, [user]);

  // Don't pass the User Password here
  const logInUser = (loggedUser) => {
    setUser({ ...loggedUser, loggedIn: true })
  }

  const logOutUser = () => {
    localStorage.removeItem('user')
  }
  return (
    <AuthenticatedUser.Provider
      value={{ user, logInUser, isAuthenticated, setIsAuthenticated, logOutUser }}
    >
      {props.children}
    </AuthenticatedUser.Provider>
  );
};
