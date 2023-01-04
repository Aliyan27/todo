import "./form.css";

const Form = ({ data, setData, newData, setNewData }) => {
  const userInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const loginButton = (e) => {
    e.preventDefault();
    const newRec = { ...data, id: new Date().getTime().toString() };

    setNewData([...newData, newRec]);
    console.log(newData, newRec);
    setData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="Dashboard">
      <label>User name</label>
      <input
        type="text"
        onChange={userInput}
        name="username"
        value={Date.username}
      />
      <label>Email</label>
      <input
        type="email"
        onChange={userInput}
        name="email"
        value={Date.email}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={userInput}
        name="password"
        value={Date.password}
      />
      <button type="button" onClick={loginButton}>
        Login
      </button>
    </div>
  );
};
export default Form;
