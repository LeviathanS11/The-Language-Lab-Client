import React from 'react';
import { Fade, Slide, AttentionSeeker} from "react-awesome-reveal";

const PageAnimation = () => {
    return (
        <div  className='text-center my-10'>
      <Slide>
        <h1 className='text-3xl font-extrabold text-orange-400'>Welcome</h1>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1} >
        Here You Will Find The Suitable Course For You
      </Fade>
      <AttentionSeeker fadeInDownBig>
        go
      </AttentionSeeker>
      
      
    </div>
    );
};

export default PageAnimation;
