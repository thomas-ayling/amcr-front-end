import { Responsive, WidthProvider } from 'react-grid-layout';
import React, { useState } from "react";
import './layout.css';




const ResponsiveGridLayout = WidthProvider(Responsive);

// layout is an array of objects, see the demo for more complete usage


function Grid ()  {
  const [layout, setLayout] = useState([
  ]);
  
  const [breakpoint, setBreakpoint] = useState({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 })

  const addItem =(div) => {
    setLayout([...layout, div].map())
  }
  const removeItem =(square) => {
    setLayout(layout.filter(item => item !== square))
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/page-layout/getLayout/${page}`)
      .then((res) => {
        setLayout(res.data);
        setIsLoaded(true);
        console.log(res.data);
      }).catch((err) => {
        console.log(err.message);

      })
  }, [])
  return (

    
    <div>
    <ResponsiveGridLayout
      className='layout'
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={30}
      width={1200}>

    {layout.map((item, index) => (
<div key={index} >
  {/* <UncontrolledExample /> */}
  
        {item.i}
        {/* <button onClick={()=> removeItem(item)}>Remove Item</button> */}
        
      </div>
    ))}
    
      
      
      
    </ResponsiveGridLayout>
    {/* <button onClick={()=> addItem()}>Add Item</button> */}
    </div>
  );
}

export default Grid;
