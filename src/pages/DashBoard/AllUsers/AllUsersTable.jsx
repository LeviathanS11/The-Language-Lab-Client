import React from 'react';
import Swal from 'sweetalert2';

const AllUsersTable = ({ item,index ,refetch}) => {
    const {name,email,_id } = item;
    const handleMakeAdmin=(id)=>{
        fetch(`https://assignment-12-server-jade.vercel.app/users/admin/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <tr>
            <td>{index+1}</td>
            <td>
                {name}
            </td>
            <td>
                {email}
            </td>
            <td>{item.role ==='admin'?'admin':<button onClick={()=>handleMakeAdmin(_id)} className='btn'>Admin</button>}</td>
            <td><button className='btn'>Instructor</button></td>
        </tr>
    );
};

export default AllUsersTable;