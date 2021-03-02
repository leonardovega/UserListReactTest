import React, {Component, createContext, useState } from "react";

export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState(null);

//   return (
//     <UserContext.Provider
//       value={{
//         loading, 
//         setLoading,
//         users,
//         setUsers
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

class UserProvider extends Component {
  state={
    loading: false,
    users: null
  }

  setUsers = (users) => {
    this.setState((prevState) => ({users}))
  }
  setLoading = (loading) => {
    this.setState((prevState) => ({loading}))
  }

  render() {
    const { children } = this.props;
    const { users } = this.state;
    const { loading } = this.state;
    const { setUsers } = this;
    const { setLoading } = this;
    return (
    <UserContext.Provider
      value={{
        loading, 
        setLoading,
        users,
        setUsers
      }}
    >
      {children}
    </UserContext.Provider>
    )
  }
}
 
export const UserConsumer = UserContext.Consumer;

export { UserProvider }