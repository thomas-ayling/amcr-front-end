
import Grid from '../components/Layout'
import React, { useEffect, useRef } from 'react'

const HomePage = () => {
  
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;

        return () => {
            mounted.current = false;
        };
    }, []);

    if (mounted.current = true) {
      console.log('Home Page is Mounted')
    } else { console.log('Home Page isnt mounted')}
  return (
    <>
    <div>HomePage</div>

    <Grid/>
    </>
  )
}

export default HomePage;