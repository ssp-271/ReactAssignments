import React from 'react';

function UsersList() {

    let usersArray  =  
    [{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},			
    {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},			
    {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},			
    {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},			
    {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},			
    {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}
    ];

    let finalArray = usersArray.map(item => 
        <tr>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{<img src={item.avatar}></img>}</td>
        </tr>)

  return (
      <>
        

        <table  border="2" width="500" class="center">
         
          <tr>
            <th>ID</th>
            <th>E-Mail</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>

          {finalArray}

        </table>
       
       
      </>     
  );
}

export default UsersList;
