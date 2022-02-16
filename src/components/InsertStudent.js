import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import StudentServices from '../services/StudentServices';

const InsertStudent = () => {
    const [name, setName] = useState('')
    const [classroom, setClassroom] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const { id } = useParams();


    //insert student va update
    const saveOrUpdateStudent = (e) => {
        e.preventDefault();
        const student = { name, classroom, email }

        //update student
        if (id) {
            StudentServices.updateStudent(id, student).then((res) => {
                navigate('/ListStudent')
            }).catch(error => {
                console.log(error)
            })

        //add student
        } else {
            StudentServices.createStudent(student).then((res) => {
                console.log(res.data)
                navigate('/ListStudent')

            }).catch(error => {
                console.log(error)
            })
            console.log(student);
        }
    }

    //student by id
    useEffect(() => {
        StudentServices.getStudentById(id).then((res) => {
            setName(res.data.name)
            setClassroom(res.data.classroom)
            setEmail(res.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    //thong bao da update hay da tao moi
    const title = () => {
        if (id) {
            return <h2 className="text-center">Update</h2>
        } else {
            return <h2 className="text-center">Add</h2>
        }
    }


    return (
        <div>
            <br /> <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <h2 className="text-center"> Add Student</h2>
                        <form>
                            <div className="form-group mb-2">
                                <label className="font-label">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter you name"
                                    name="name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-2">
                                <label className="font-label">classroom</label>
                                <input
                                    type="text"
                                    placeholder="Enter you classroom"
                                    name="classroom"
                                    className="form-control"
                                    value={classroom}
                                    onChange={(e) => setClassroom(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-2">
                                <label className="font-label">Email</label>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveOrUpdateStudent(e)}>ADD</button>
                            <Link to="/ListStudent" className="btn btn-danger bm-2">CANCEL</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsertStudent;
