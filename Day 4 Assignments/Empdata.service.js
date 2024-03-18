import axios from 'axios';

export let dataServiceObj = 
{
    getAllEmps,
    getEmpById,
    addEmp,
    updateEmp,
    deleteEmp
};



let url = "http://localhost:3500/emps/";

function getAllEmps()
{
    return axios.get(url);
}


function addEmp(empsObj)
{
    return axios.post(url, empsObj);
}

function deleteEmp(eno)
{
    return axios.delete(url + eno);
}


function getEmpById(eno)
{
    return axios.get(url + eno);
}

function updateEmp(empsObj)
{
    return axios.put(url + empsObj.empid, empsObj);
}


