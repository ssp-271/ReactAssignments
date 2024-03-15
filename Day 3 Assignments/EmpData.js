import { useState } from "react";
function Empdata() {
    const [empsArray, setEmpsArray] = useState([]);
 
    // For reading data from user through textboxes
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");
 
 
    function getDeptsButton_click() {
 
        let tempArray = [
            { empno: 1, ename: "Shanmukh", job: "Manager", sal: 1000000, deptno: 101 },
            {empno: 2, ename: "Sai", job: "HR", sal: 1000000, deptno: 102 },
            {empno: 3, ename: "Pavan", job: "Finance", sal: 1000000, deptno: 103 },
           
        ];
 
        setEmpsArray(tempArray);
    }
 
    function addEmpButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;
 
 
        let tempArray = [...empsArray];
        tempArray.push(empObj);
        setEmpsArray(tempArray);
 
        clearFields();
    }
 
    function clearFields()
    {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }
    function  deleteEmp_click(eno)
    {
        const isConfirmed = window.confirm('Confirm Deletion?');

        if(isConfirmed)
        {
            let tempArray = [...empsArray];
       
            let index = tempArray.findIndex(item => item.empno == eno);
            tempArray.splice(index, 1);
     
            setEmpsArray(tempArray);
        }
        
    }
    function  selectEmp_click(eno)
    {
        let empObj = empsArray.find(item => item.empno == eno);
 
        setEmpno(empObj.empno);
        setEname(empObj.ename);
        setJob(empObj.job);
        setSal(empObj.sal);
        setDeptno(empObj.deptno);
    }
    function updateEmpButton_click() {
        let tempArray = [...empsArray];
       
        let index = tempArray.findIndex(item => item.empno == empno);
        tempArray[index].ename = ename ;
        tempArray[index].job = job ;
        tempArray[index].sal = sal ;
        tempArray[index].deptno = deptno ;
 
        setEmpsArray(tempArray);
        clearFields();
    }
    let resultArray = empsArray.map((item, index) => {
        return <tr key={index}>
                        <td>   {item.empno}  </td>
                        <td>   {item.ename}  </td>
                        <td>   {item.job}  </td>
                        <td>   {item.sal}  </td>
                        <td>   {item.deptno}  </td>
                        <td>
                            <a  onClick={() => selectEmp_click(item.deptno)} href="javascript:void(0);"><img src="https://thumbs.dreamstime.com/b/select-sign-rounded-isolated-button-white-sticker-197147273.jpg" width="100" alt="Select" /></a> |
                            <a  onClick={() => deleteEmp_click(item.deptno)} href="javascript:void(0);"><img src="https://t4.ftcdn.net/jpg/03/46/38/39/240_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg" width="100" alt="Delete" /></a>
                        </td>
                </tr>
    });
 
 
    return (<>
 
       
 
        <input type="text" placeholder="Emp Number" value={empno}   onChange={(e) => setEmpno(e.target.value)} />
        <input type="text" placeholder="Emp Name" value={ename}   onChange={(e) => setEname(e.target.value)} />
        <input type="text" placeholder="Job" value={job}  onChange={(e) => setJob(e.target.value)} />
        <input type="text" placeholder="Salary" value={sal}  onChange={(e) => setSal(e.target.value)} />
        <input type="text" placeholder="Dept Number" value={deptno}  onChange={(e) => setDeptno(e.target.value)} />
        <hr />
 
        <input type="button" onClick={getDeptsButton_click} value="Get Depts" />
        <input type="button" onClick={addEmpButton_click} value="Add Dept" />
        <input type="button" onClick={updateEmpButton_click} value="Update Dept" />
        <hr />
 
        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Emp Number</th>
                <th>Emp Name</th>
                <th>JOb</th>
                <th>Salary</th>
                <th>Dept Number </th>
                <th></th>
            </tr>
            {resultArray}
        </table>
 
    </>);
}
 
export default Empdata;