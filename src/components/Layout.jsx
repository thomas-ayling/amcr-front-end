import { Responsive, WidthProvider } from 'react-grid-layout';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BodyCarousel from './behaviour-carousel/BehaviourCarousel';

const ResponsiveGridLayout = WidthProvider(Responsive);

// layout is an array of objects, see the demo for more complete usage

function Grid() {
  const [layout, setLayout] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [breakpoint, setBreakpoint] = useState({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 });

  const baseURL = "http://localhost:3001/page-layout/";

  const addItem = () => {
    let obj = {
      "elementName": 'Tester4',
      "xPosition": 3,
      "yPosition": 8,
      "width": 2,
      "height": 4,
      "isMovable": true,
      "page": 'profile',

    };
    setLayout([...layout, obj])
    axios.post(baseURL, obj)
    .catch((err) => {
      console.log(err);
    });
  };

  console.log(layout, "layout");


  const removeItem = (square) => {
    setLayout(layout.filter((item) => item !== square))
    .then(axios.delete(`${baseURL}${square.id}`)) ;
    
  };



  const editPage = () => {};

  useEffect(() => {
    axios
      .get(`http://localhost:3001/page-layout/`)
      .then((res) => {
        setLayout(res.data);
       
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleComponent = (item) => {
    if (item.elementName === "Tester4") return <p>Hi </p>;
    return 

  }

  return (
    <div>
      <ResponsiveGridLayout
        className='layout'
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={30}
        width={1200}
      >
        {layout.map((item, index) => (
          <div key={index} className="item-container">
            {/* <UncontrolledExample /> */}
            {handleComponent(item)}
            {/* {item.i} */}
            <button onClick={()=> removeItem(item)}>Remove Item</button>
          </div>
        ))}
      </ResponsiveGridLayout>
      <button onClick={() => addItem()}>Add Item</button>
    </div>
  );
}

export default Grid;
