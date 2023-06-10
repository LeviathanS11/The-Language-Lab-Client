import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const {user}=useContext(AuthContext);
    const{data:classes=[],refetch}=useQuery({
        queryKey:['class',user?.email],
        queryFn:async()=>{
            const response=await fetch(`http://localhost:5000/myclass?email=${user?.email}`)
            return response.json();
        }
    })
    return[classes,refetch]
}

export default useClass;