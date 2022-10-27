import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Table() {
  const init = {
    recid: "",
    name: "",
    stationnum: "",
    prtype: "",
  };
  const [state, setstate] = useState(init);
  const data = useSelector((state) => state.data);
  return (
    <div>
      <Table>
        <th>Printer#</th>
        <th>Printer Name</th>
        <th>Workstation</th>
        <th>Type</th>
        <th>Action</th>

        {data.map((el) => (
          <tr>
            <td>{el.recid}</td>
            <td>{el.name}</td>
            <td>{el.stationnum}</td>
            <td>{el.prtype}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
