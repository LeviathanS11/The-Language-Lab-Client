import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useClass from '../../hooks/useClass';
import PrivateRoutes from '../../Routes/PrivateRoutes';

const AllClassCard = ({ item }) => {
    const[,refetch]=useClass();
    const[disable,setDisble]=useState(false)
    const{user}=useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const { image, name,
        instructor_name ,
        available_seats,price,
        students,_id} = item;

        const handleAddToClass=item=>{
            if(!user){
                Swal.fire({
                    title: 'Please login add class',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Login now!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login', {state: {from: location}})
                    }
                  })              
            }
            console.log(item)
            if(user){
                setDisble(true)
                const addClass={classId:_id,image,name,available_seats,price,email:user.email}
                fetch('http://localhost:5000/myclass',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(addClass)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added .',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        }
    return (
        <div className="card w-80 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img style={{width:"300px",height:"200px"}} src={image} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center ">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Instructor : {instructor_name}</h2>
                <p>${price}</p>
                <p>Available-seats:{available_seats}</p>
                <p>Current Student : {students}</p>
                <div className="card-actions">
                    <button disabled={disable} onClick={()=>handleAddToClass(item)} className="btn bg-orange-400">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassCard;