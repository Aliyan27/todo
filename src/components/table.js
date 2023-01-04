import "./table.css";
import { FaMinusCircle } from "react-icons/fa";
const Table = ({ ele, deleteItem }) => {
  return (
    <tr>
      <td>{ele.username}</td>
      <td>{ele.email}</td>
      <td>{ele.password}</td>
      <td>
        <FaMinusCircle className="font" onClick={() => deleteItem(ele.id)} />
      </td>
    </tr>
  );
};
export default Table;
