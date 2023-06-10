import React, { useEffect, useState } from 'react';

const useInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-12-server-jade.vercel.app/instructor')
        .then(res=>res.json())
        .then(data=>{
            setInstructor(data)
        })
    },[])
    return [instructor]
};

export default useInstructor;