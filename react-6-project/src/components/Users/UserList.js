import Card from "../UI/Card";
import styles from "./UserList.module.css"

const UserList = (props) => {
  if (props.userList.length === 0) {
    return;
  }

  const userCards = props.userList.map((user) => (
    <li key={user.id}>
      {user.name} ({user.age} years old)
    </li>
  ));

  return <Card className={styles.users}><ul>{userCards}</ul></Card>;
};

export default UserList;
