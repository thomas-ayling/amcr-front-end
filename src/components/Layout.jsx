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
import WikiHeader from './carousels/WikiHeader';
import WikiTextIntro from './WikiTextIntro';
import ContentSection from './wiki/ContentSection';
import ContactHeader from './carousels/ContactHeader';
import ContactsMainCarousel from './carousels/contacts-team-carousel/ContactsMainCarousel';
import DropFileInput from './attachment-component/DropFileInput';

const ResponsiveGridLayout = WidthProvider(Responsive);

function Grid(loc) {
  const [layout, setLayout] = useState([]);
  const [page, setPage] = useState([]);
  const [isStatic, setIsStatic] = useState(false);

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
  }, []);

  useEffect(() => {
    console.log('isStatic', isStatic);
  }, [isStatic]);

  console.log('layout', layout);
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
      case 'wiki-header':
        return <WikiHeader />;
      case 'wiki-intro':
        return <WikiTextIntro />;
      case 'wiki-content':
        return <ContentSection />;
      case 'wiki-diagram':
        return <p>Diagram goes here</p>;
      case 'wiki-feedback-component':
        return <ContactComponent feedbackType='improvement' />;
      case 'contact-carousel':
        return <ContactsMainCarousel />;
      case 'contact-header':
        return <ContactHeader />;
      case 'contact-feedback-component':
        return <ContactComponent feedbackType='improvement' />;
      case 'contact-file-drop':
        return (
          <div className='drag-and-drop-box'>
            <DropFileInput />
          </div>
        );
      default:
        return <p>No return</p>;
    }
  };
  console.log('isStatic', isStatic);
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
      <button className='Grid-button' onClick={() => setIsStatic(!isStatic)}>
        on/off
      </button>
      <button className='Grid-button' onClick={() => updateItem(page)}>
        Save layout
      </button>
    </div>
  );
}

export default Grid;
