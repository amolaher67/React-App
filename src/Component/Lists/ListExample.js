import React, { Component } from "react";

export default class ListExample extends Component {
  //array = [10, 20, 30, 40];

  state = {
    users: [
      { id: 1, name: "Amol", surname: "Aher", mobile: "860055422" },
      { id: 2, name: "Anshuklal", surname: "Aher", mobile: "860055422" },
      { id: 3, name: "Fanshuklal", surname: "Aher", mobile: "860055422" },
    ],
  };

  render() {
    // const jsxList = this.array.map((num)=>{return <li>{num}</li>});

    // return (
    //   <div>
    //    {
    //      this.array.map((num)=>{ return <li>{num}</li>})
    //    }
    //   </div>
    // );
    
    const css = {
        color:'blue'
    }
    return (
      <div>
        <table>
          <thead style={css}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody style={{color:"yellow"}}>
            {this.state.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td >{user.id}</td>
                  <td >{user.name}</td>
                  <td>{user.surname}</td>
                  <td >{user.mobile}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
