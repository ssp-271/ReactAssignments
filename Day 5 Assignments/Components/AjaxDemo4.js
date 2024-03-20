import { useState } from "react";
import { dataServiceObj } from "./Empdata.service";


function AjaxDemo4() {

    const [empsArray, setEmpsArray] = useState([]);

    // For reading data from user through textboxes
    const [empid, setEmpid] = useState("");
    const [empname, setEmpname] = useState("");
    const [loc, setLoc] = useState("");
    const [job, setJob] = useState("");

    function getEmpsButton_click() {

        dataServiceObj.getAllEmps().then((resData) => {
            setEmpsArray(resData.data);
        });
    }


    function addEmpButton_click() {
        let empsObj = {};
        empsObj.empid = empid;
        empsObj.empname = empname;
        empsObj.loc = loc;
        empsObj.job = job;

        dataServiceObj.addEmp(empsObj).then((resData) => {
            alert("New Employee added to Server");
            getEmpsButton_click(); // get the latest data from server
            clearFields();
        });
    }

    function clearFields() {
        setEmpid("");
        setEmpname("");
        setLoc("");
        setJob("");
    }


    function deleteEmp_click(eno) {
        dataServiceObj.deleteEmp(eno).then((resData) => {
            alert("Employee details are deleted from Server");
            getEmpsButton_click(); // get the latest data from server            
        });

    }

    function selectEmp_click(eno) {

        dataServiceObj.getEmpById(eno).then((resData) => {
            let empsObj = resData.data;
            setEmpid(empsObj.empid);
            setEmpname(empsObj.empname);
            setLoc(empsObj.loc);
            setJob(empsObj.job);
        });
    }

    function updateEmpButton_click() {
        let empsObj = {};
        empsObj.empid = empid;
        empsObj.empname = empname;
        empsObj.loc = loc;
        empsObj.job = job;

        dataServiceObj.updateEmp(empsObj).then((resData) => {
            alert("Employee details are updated in Server");
            getEmpsButton_click(); // get the latest data from server
            clearFields();
        });
    }

    let resultArray = empsArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.empid}  </td>
            <td>   {item.empname}  </td>
            <td>   {item.loc}  </td>
            <td>   {item.job}  </td>
            <td>
                <a onClick={() => selectEmp_click(item.empid)} href="javascript:void(0);">Select</a> |
                <a onClick={() => deleteEmp_click(item.empid)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    });


    return (<>

        <h3>Employee Details</h3>
        <hr />

        <input type="text" placeholder="Emp ID" value={empid} onChange={(e) => setEmpid(e.target.value)} />
        <input type="text" placeholder="Emp Name" value={empname} onChange={(e) => setEmpname(e.target.value)} />
        <input type="text" placeholder="Location" value={loc} onChange={(e) => setLoc(e.target.value)} />
        <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
        <hr />

        <input type="button" onClick={getEmpsButton_click} value="Get Employees" />
        <input type="button" onClick={addEmpButton_click} value="Add Employee" />
        <input type="button" onClick={updateEmpButton_click} value="Update Employee" />
        <hr />

        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Location</th>
                <th>Job</th>
            </tr>
            {resultArray}
        </table>

    </>);
}

export default AjaxDemo4;