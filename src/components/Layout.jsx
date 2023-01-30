import { Responsive, WidthProvider } from 'react-grid-layout';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { json, useLocation } from 'react-router-dom';
import BehaviourCarousel from './carousels/behaviour-carousel/BehaviourCarousel';
import './layout.css';
import ContactComponent from './contact-component/ContactComponent';
import Loader from './contact-component/input-components/shared-input-components/Loader';
import HomepageHeaderCarousel from './carousels/HomepageHeaderCarousel';
import HomepageBodyCarousel from './carousels/HomepageBodyCarousel';

const ResponsiveGridLayout = WidthProvider(Responsive);

function Grid(loc) {
  const [layout, setLayout] = useState([]);
  const [page, setPage] = useState([]);
  const [isStatic, setIsStatic] = useState([true]);

  const [isLoading, setIsLoading] = useState(true);

  const baseURL = 'http://localhost:3001/page-layout/';
  const location = useLocation();
  const pathname = location.pathname;

  const path = pathname.replace(/[^a-z0-9-]/g, '');
  console.log('pathname', loc.loc);
  useEffect(() => {
    axios
      .get(`${baseURL}name=${loc.loc}`)
      .then((res) => {
        if (res) {
          console.log('res', res.data);
          setIsLoading(false);
          setPage(res.data);
          setLayout(res.data.components);
        }
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }, [isStatic]);

  const removeItem = (square) => {
    axios.delete(`${baseURL}${square.id}`).then(setLayout(layout.filter((item) => item !== square)));
  };

  const onOff = (item) => {
    if (isStatic === false) {
      setIsStatic(true);
      axios.put(
        `${baseURL}${item.id}`,

        {
          static: isStatic,
        },
        { headers: headers }
      );
    } else {
      setIsStatic(false);
      axios.put(
        `${baseURL}${item.id}`,
        {
          static: isStatic,
        },
        { headers: headers }
      );
    }
  };
  console.log(isStatic, 'after code');
  const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Credentials': 'true' };
  const updateItem = (item) => {
    axios.put(
      `${baseURL}${item.id}`,

      {
        components: layout,
      },
      { headers: headers }
    );
  };

  const handleComponent = (item) => {
    switch (item.i) {
      case 'homepage-header-carousel':
        // code block

        return <HomepageHeaderCarousel />;
      case 'homepage-body-carousel':
        // code block

        return <HomepageBodyCarousel />;

      default:
        return <p>No return</p>;
    }
  };
  if (isLoading) return <Loader />;

  return (
    <div>
      <ResponsiveGridLayout
        className='layout'
        layout={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={30}
        width={1200}
        onLayoutChange={(movingItem) => setLayout(movingItem)}
        isBounded={true}
      >
        {layout?.map((component) => (
          <div className='item-container' key={component.i} data-grid={{ x: component.x, y: component.y, w: component.w, h: component.h, static: isStatic }}>
            {handleComponent(component)}
          </div>
        ))}
      </ResponsiveGridLayout>
      <button className='Grid-button' onClick={() => onOff(page)}>
        on/off
      </button>
      <button className='Grid-button' onClick={() => updateItem(page)}>
        Save layout
      </button>
    </div>
  );
}

export default Grid;
