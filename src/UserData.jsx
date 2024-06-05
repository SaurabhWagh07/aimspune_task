import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';
import {NavLink} from 'react-router-dom';



const Userdata = () => {

    const [data, setData] = useState([]);


    const FetchData = async () => {
        const res = await Axios.get('https://dummy.restapiexample.com/api/v1/employees');
     
        console.log(res.data.data);

        setData(res.data.data);

    }

    useEffect(() => {
        FetchData();
    }, [])

console.log(data)

    const DeleteData = async (id) => {
        
        const res = data.filter(val => val.id !== id);
        setData(res);


        await Axios.delete(`https://dummy.restapiexample.com/public/api/v1/delete/2`);

    }



    return (

        <>
            <h1 className='p-4  text-center my-4 text-dark'>User Data</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className='table table-bordered table-hover table-striped table-responsive-sm text-center'>
                            <thead>
                                <tr>
                                    <th>EMp_ID</th>
                                    <th>EMp_No</th>
                                    <th>EMp_Name</th>
                                    <th>EMp_Dep</th>
                                    <th>EMp_Role</th>
                                    <th>EMp_HireDate</th>
                                    <th>EMp_Salary</th>
                                    <th></th>
                                    <th></th>
                                </tr>

                            </thead>


                            <tbody>
                                {

                                    data.map((val) => {
                                        return (
                                            <>

                                                <tr>                                              
                                                    <td>{val.id}</td>
                                                    <td>{val.employee_no}</td>
                                                    <td>{val.employee_name}</td>
                                                    <td>{val.employee_role}</td>
                                                    <td>{val.employee_dep}</td>
                                                    <td>{val.employee_hireddate}</td>
                                                    <td>{val.employee_salary}</td>
                                                    <td><i className='fa fa-trash text-danger fw-bold' onClick={() => DeleteData(val.id)}></i></td>
                                                    <td><NavLink to={`/EditUser/${val.id}`}><i className='fa fa-edit text-success fw-bold'> </i> </NavLink></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Userdata
