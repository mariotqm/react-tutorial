import { useState } from "react";

import List from "./components/List";
import Card from "./components/Card";
import Container from "./components/Container";
import UserForm from "./components/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);

  const submit = (newUser) => {
    setUsers([...users, newUser]);
  };

  console.log("rendering App.jsx");

  return (
    <Container>
      <Card>
        <UserForm submit={submit} />
      </Card>
      {users.length ? (
        <Card>
          <List users={users} />
        </Card>
      ) : null}
    </Container>
  );
};
export default App;
