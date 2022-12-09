import { Responsive, WidthProvider } from 'react-grid-layout';
import React from 'react';
import './layout.css';


const ResponsiveGridLayout = WidthProvider(Responsive);

// layout is an array of objects, see the demo for more complete usage
const layout = [
  { i: 'a', x: 0, y: 0, w: 1, h: 2 },
  { i: 'b', x: 1, y: 0, w: 1, h: 2 },
  { i: 'c', x: 2, y: 0, w: 1, h: 2 },
  { i: 'e', x: 3, y: 0, w: 1, h: 2 },
  { i: 'f', x: 4, y: 0, w: 1, h: 2 },
  { i: 'g', x: 0, y: 1, w: 1, h: 2 },
  { i: 'h', x: 1, y: 1, w: 1, h: 2 },
  { i: 'i', x: 2, y: 1, w: 1, h: 2 },
  { i: 'j', x:3, y: 1, w: 1, h: 2 },
  { i: 'd', x: 4, y: 1, w: 1, h: 2 },
];
function Grid ()  {
  

  return (


    <ResponsiveGridLayout
      className='layout'
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={30}
      width={1200}
    >
      <div key='a' id='a-div'>
        a
      </div>
      <div key='b' id='b-div'>
        b
      </div>
      <div key='c' id='c-div'>
        c
      </div>
      <div key='d' id='d-div'>
        c
      </div>
      <div key='e' id='b-div'>
        c
      </div>
      <div key='f' id='a-div'>
        c
      </div>
      <div key='g' id='c-div'>
        c
      </div>
      <div key='h' id='d-div'>
        c
      </div>
      <div key='i' id='b-div'>
        c
      </div>
      <div key='j' id='a-div'>
        c
      </div>
    </ResponsiveGridLayout>
  );
}

export default Grid;
