import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudentServices from '../services/StudentServices';

const ListStudent = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        getAllStudents();
    }, [])

    //reflesh lai trang
    const getAllStudents = () => {
        StudentServices.getAllStudents().then((res) => {
            setStudents(res.data)
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        })
    }

    //xoa student
    const deleteStudent = (studentId) => {
        StudentServices.deleteStudent(studentId).then((res) => {
            getAllStudents();

        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h2 className='text-center'>List Students</h2>
            <Link to="/insert-student" className="btn btn-primary bm-2">ADD STUDENT</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CLASSROOM</th>
                    <th>EMAIL</th>
                    <th>ACTION</th>

                </thead>
                <tbody>
                    {
                        students.map(
                            student =>
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.classroom}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <Link to={`/edit-student/${student.id}`} className="btn btn-info bm-2">EDIT</Link>
                                        <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}
                                            style={{ marginLeft: "10px" }}>DELETE</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>);
};

export default ListStudent;
