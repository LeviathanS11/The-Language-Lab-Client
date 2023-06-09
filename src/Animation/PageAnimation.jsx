import React from 'react';
import { Slide, AttentionSeeker, JackInTheBox, Rotate, Hinge} from "react-awesome-reveal";

const PageAnimation = () => {
    return (
        <div  className='text-center my-10'>
      <Slide>
        <h1 className='text-3xl font-extrabold text-orange-400'>Welcome</h1>
      </Slide>
      <AttentionSeeker effect='flash'>
      <p className='font-semibold'>Here You Will Find The Suitable Course For You</p>
      </AttentionSeeker>
      
    </div>
    );
};

export default PageAnimation;
