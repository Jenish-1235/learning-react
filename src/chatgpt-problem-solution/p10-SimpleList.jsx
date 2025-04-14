export default function FruitList({ fruits }) {
  return (
    <div>
      <ul>
        {fruits.map((fruit) => {
          return <li key={fruit.id}>{fruit.name}</li>;
        })}
      </ul>
    </div>
  );
}

export function UserList({ users }) {
  return (
    <>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.age}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
