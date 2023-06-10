import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const {user}=useContext(AuthContext);
    const{data:classes=[],refetch}=useQuery({
        queryKey:['class',user?.email],
        queryFn:async()=>{
            const response=await fetch(`https://assignment-12-server-jade.vercel.app/myclass?email=${user?.email}`)
            return response.json();
        }
    })
    return[classes,refetch]
}

export default useClass;