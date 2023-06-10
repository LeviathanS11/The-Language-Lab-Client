import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user}=useContext(AuthContext);
    const{data:isAdmin,refetch}=useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async()=>{
            const response=await fetch(`https://assignment-12-server-jade.vercel.app/users/admin/${user.email}`)
            return response.json();
        }
    })
    return [isAdmin]
};

export default useAdmin;