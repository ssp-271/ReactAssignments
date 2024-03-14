import logo from './logo.svg';
import './App.css';
import React from 'react';

function EmpDetails() {

  let empObj = { empno : 10256, ename :  "Scott", job : "Manager" , salary : 100000, deptno : 10 };

  return (
      <>
        <h3>Developing Web Applications using React JS</h3>
        <hr/>
        <table  border="2" width="500">
         
          <tr>
            <th>Empno</th>
            <th>Ename</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Deptno </th>
          </tr>
          <tr>
            <td>{empObj.empno}</td>
            <td>{empObj.ename}</td>
            <td>{empObj.job}</td>
            <td>{empObj.salary}</td>
            <td>{empObj.deptno}</td>
          </tr>

        </table>
       
      </>     
  );
}

export default EmpDetails;

