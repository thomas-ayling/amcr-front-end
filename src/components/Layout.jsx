import { Responsive, WidthProvider } from 'react-grid-layout';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BehaviourCarousel from './carousels/behaviour-carousel/BehaviourCarousel';
import './layout.css';
import ContactComponent from './contact-component/ContactComponent';
import Loader from './contact-component/input-components/shared-input-components/Loader';
import HomepageHeaderCarousel from './carousels/HomepageHeaderCarousel';
import HomepageBodyCarousel from './carousels/HomepageBodyCarousel';
import HomepageIntro from './HomepageTextIntro';

const ResponsiveGridLayout = WidthProvider(Responsive);

function Grid(loc) {
  const [layout, setLayout] = useState([]);
  const [page, setPage] = useState([]);
  const [isStatic, setIsStatic] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const baseURL = 'http://localhost:3001/page-layout/';

  useEffect(() => {
    axios
      .get(`${baseURL}name=${loc.loc}`)
      .then((res) => {
        if (res) {
          setIsLoading(false);
          setPage(res.data);
          setLayout(res.data.components);
        }
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }, [isStatic]);

  const onOff = () => {
    if (isStatic === false) {
      setIsStatic(true);
      console.log('isStatic2', isStatic);
      // axios.put(
      //   `${baseURL}${item.id}`,

      //   {
      //     static: isStatic,
      //   }
      // );
    } else {
      console.log('isStatic3', isStatic);
      setIsStatic(false);
      // axios.put(`${baseURL}${item.id}`, {
      //   static: isStatic,
      // });
    }
  };

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
        return <HomepageHeaderCarousel />;
      case 'homepage-body-carousel':
        return <HomepageBodyCarousel />;
      case 'homepage-behaviour-carousel':
        return <BehaviourCarousel />;
      case 'homepage-text-intro':
        return <HomepageIntro />;
      case 'homepage-feedback-component':
        return <ContactComponent feedbackType='feedback' />;
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
        static={isStatic}
      >
        {layout?.map((component) => (
          <div className='item-container' key={component.i} data-grid={{ x: component.x, y: component.y, w: component.w, h: component.h }}>
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
