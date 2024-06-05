import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';


const EditUser = () => {

    const res = useParams();
    console.log(res.id);
    const { id } = useParams();

    const nav=useNavigate();



    const [employee_no, setNo] = useState('');
    const [employee_name, setName] = useState('');
    const [employee_dep, setRole] = useState('');
    const [employee_role, setCTC] = useState('');
    const [employee_hireddate, setSkill] = useState('');
    const [employee_salary, setEmail] = useState('');


    const fecthdata = async () => {
        const res = await axios.get(`https://dummy.restapiexample.com/api/v1/employees`);
        console.log(res.data.data);
        

        setNo(res.data.employee_no);
        setName(res.data.employee_name);
        setCTC(res.data.employee_dep);
        setEmail(res.data.employee_role);
        setRole(res.data.employee_hireddate);
        setSkill(res.data.employee_salary);
    }


    useEffect(() => {
        fecthdata()
    }, [])


    const UpdateForm = async (e) => {
        e.preventDefault();

        console.log(employee_no)
        console.log(employee_name)
        console.log(employee_dep)
        console.log(employee_role)
        console.log(employee_hireddate)
        console.log(employee_salary);


        await axios.put(`https://dummy.restapiexample.com/public/api/v1/update/21`, {

        employee_no,
        employee_name,
        employee_dep,
        employee_role,
        employee_hireddate,
        employee_salary,

        })


        nav('/userdata');


    }


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center my-4 text-dark'>Edit Employee Data</h1>
                    </div>

                  
                    <form action="" >

                    <div className="col-md-12 bg-dark p-4 fw-bold text-light">
                                <div className="row">
                                <div className="col-md-12 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Update Employee No:</label>
                                            
                                            <input type="text" className='form-control' name="emp_no" id="" value={this.state.employee_no} onChange={(e) => this.setState({ employee_no: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Update Employee Name:</label>
                                            
                                            <input type="text" className='form-control' name="user_name" id="" value={this.state.employee_name} onChange={(e) => this.setState({ employee_name: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Update Department :</label>
                                            <select name="user_dep" id="" className='form-control' value={this.state.employee_dep} onChange={(e) => this.setState({ employee_dep: e.target.value })}>
                                                <option value="">--Select Department--</option>
                                                <option value="Front-End">Front End</option>
                                                <option value="Back-End">Back End</option>
                                                <option value="Software Engginer">Software Engginer</option>
                                                <option value="Testing Engginer">Testing Engginer</option>
                                            </select>                                   
                                        </div>
                                    </div>

                                    <div className="col-md-6 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Update Designation :</label>
                                            <select name="user_role" id="" className='form-control' value={this.state.employee_role} onChange={(e) => this.setState({ employee_role: e.target.value })}>
                                                <option value="">--Select Department--</option>
                                                <option value="Junior Developer">Junior Developer</option>
                                                <option value="Sinor Developer">Sinor Developer</option>
                                                <option value="HR">HR</option>
                                                <option value="Manager">Manager</option>
                                            </select>                                   
                                        </div>
                                    </div>

                                    <div className="col-md-6 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Update Hired Date:</label>
                                            <input type="date" className='form-control' name="hired_date" id="" value={this.state.employee_hireddate} onChange={(e) => this.setState({ employee_hireddate: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Update Salary:</label>
                                            <input type="text" className='form-control' name="user_salary" id="" value={this.state.employee_salary} onChange={(e) => this.setState({ employee_salary: e.target.value })} />
                                        </div>
                                    </div>


                                <div className="col-md-12 text-center">
                                    <button className='btn btn-danger px-4 my-2' onClick={(e) => UpdateForm(e)}>Update Form</button>
                                </div>


                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}

export default EditUser