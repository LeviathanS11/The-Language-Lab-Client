import React, { useEffect, useState } from 'react';

const useClasses = () => {
    const[info,setInfo]=useState([]);
    useEffect(()=>{
        fetch('https://assignment-12-server-jade.vercel.app/class')
        .then(res=>res.json())
        .then(data=>{
            setInfo(data)
        })
    },[])
    return [info];
};

export default useClasses;