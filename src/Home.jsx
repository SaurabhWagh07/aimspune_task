import React, { Component } from 'react';
import Axios from 'axios';

export default class Home extends Component {

    constructor() {
        super()

        this.state = ({
            employee_no:'',
            employee_name: '',
            employee_dep:'',
            employee_role: '',
            employee_hireddate:'',
            employee_salary:'',
        })
    }



    SaveForm = async (e) => {

        e.preventDefault();
        alert('Congratulation!!');
        console.log(this.state);

        await Axios.post('https://dummy.restapiexample.com/api/v1/create', this.state);


        this.setState({
            employee_no:'',
            employee_name: '',
            employee_dep:'',
            employee_role: '',
            employee_hireddate:'',
            employee_salary:'',
        })
    }


    
    render() {

        return (
            <>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='text-center my-4 text-dark'>Employee Form</h1>
                        </div>


                        <form action="" onSubmit={(e) => this.SaveForm(e)}>

                            <div className="col-md-12 bg-dark p-4 fw-bold text-light">
                                <div className="row">
                                    <div className="col-md-12 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Employee No:</label>
                                            
                                            <input type="text" className='form-control' name="emp_no" id="" value={this.state.employee_no} onChange={(e) => this.setState({ employee_no: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Employee Name:</label>
                                            
                                            <input type="text" className='form-control' name="user_name" id="" value={this.state.employee_name} onChange={(e) => this.setState({ employee_name: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Department :</label>
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
                                            <label htmlFor="">Designation :</label>
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
                                            <label htmlFor="">Hired Date:</label>
                                            <input type="date" className='form-control' name="hired_date" id="" value={this.state.employee_hireddate} onChange={(e) => this.setState({ employee_hireddate: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Salary:</label>
                                            <input type="text" className='form-control' name="user_salary" id="" value={this.state.employee_salary} onChange={(e) => this.setState({ employee_salary: e.target.value })} />
                                        </div>
                                    </div>



                                    <div className="col-md-12 text-center">
                                        <button className='btn btn-success px-4 m-2'>Save Form</button>
                                        <button  className='btn btn-danger px-4 m-2'>Reset Form</button>
                                    </div>


                                </div>
                            </div>


                        </form>
                    </div>
                </div>

            </>
        )
    }
}
