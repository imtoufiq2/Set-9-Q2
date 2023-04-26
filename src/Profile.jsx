import { useGlobalHook } from "./Contexts";

const Profile = () => {
  const { user } = useGlobalHook();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Profile</h1>
      <img src={user.img} width={"300px"} alt={user.name} />
      <h1>Name : {user.name}</h1>
      <h3>bio :{user.bio}</h3>
    </div>
  );
};

export default Profile;
