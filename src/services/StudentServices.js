import axios from "axios";

const  STUDENT_BASE_REST_API_URL ='https://studentmanagerapi.herokuapp.com/students';

class StudentServices{
    getAllStudents(){
        return axios.get(STUDENT_BASE_REST_API_URL)
    }

    createStudent(student){
        return axios.post(STUDENT_BASE_REST_API_URL, student)

    }
    getStudentById(studentId){
        return axios.get(STUDENT_BASE_REST_API_URL + '/' + studentId)
    }
    updateStudent(studentId, student){
        return axios.put(STUDENT_BASE_REST_API_URL + '/' + studentId, student)
    }
    deleteStudent(studentId){
        return axios.delete(STUDENT_BASE_REST_API_URL + '/' + studentId)
    }
}

export default new StudentServices();