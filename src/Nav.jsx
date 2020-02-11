import React from "react";

function Nav(){
  return (
    <div className="nav">
      <table className="nav-links">
        <tr>
          <th>Home</th>
          <th>Notifications</th>
          <th>Messages</th>
        </tr>
      </table>
      <p> </p>
      <input type='text' placeholder='Search' />
      <input type='text' placeholder='Tweet' />
    </div>
  );
}

export default Nav;
