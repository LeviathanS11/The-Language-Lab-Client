import React, { useEffect, useState } from 'react';

const useClasses = () => {
    const[info,setInfo]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/class')
        .then(res=>res.json())
        .then(data=>{
            setInfo(data)
        })
    },[])
    return [info];
};

export default useClasses;