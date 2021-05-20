import React, { useState } from "react";
import "./Field.css";
const table = (
  <table className="field">
    <tr>
      <td className="square">  </td>
      <td className="square">  </td>
      <td className="square">  </td>
    </tr>
    <tr>
      <td className="square">  </td>
      <td className="square">  </td>
      <td className="square">  </td>
    </tr>
    <tr>
      <td className="square">  </td>
      <td className="square">  </td>
      <td className="square">  </td>
    </tr>
  </table>
);

export default function Field() {
  const [field, setField] = useState(table);

  function attack() {
    setField((prevField) => {
      return (
        <table className="field">
          <tr>
            <td className="square">  </td>
            <td className="square">&#128121;</td>
            <td className="square">  </td>
          </tr>
          <tr>
            <td className="square">  </td>
            <td className="square">  </td>
            <td className="square">  </td>
          </tr>
          <tr>
            <td className="square">  </td>
            <td className="square">&#128057;</td>
            <td className="square">  </td>
          </tr>
        </table>
      );
    });
  }

  return (
    <div>
      {field}
      <button onClick={attack}>Start</button>
    </div>
  );
}
