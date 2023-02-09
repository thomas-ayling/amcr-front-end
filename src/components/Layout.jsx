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
import LibrarySearch from './library/LibrarySearch';
import LibraryHeader from './carousels/LibraryHeader';
import { get, put } from '../service/GridLayoutService';

const ResponsiveGridLayout = WidthProvider(Responsive);

//loc is the page the grid is on eg "homepage", "contacts", "case-study". It should match the name of the page in the backend.
function Grid(loc) {
  const [layout, setLayout] = useState([]);
  const [page, setPage] = useState([]);
  //Used to turn resizeable and draggable functions on and off false =!resizeable and !Draggable
  const [isChangeable, setIsChangeable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get(setPage, setLayout, setIsLoading, loc);
  }, []);

  const updateItem = (item) => {
    put(item, layout, page);
  };
  // This is where the component knows what to render new components need to be added to the switch case so that they can be inside the grid
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
      case 'library-header':
        return <LibraryHeader />;
      case 'library-search':
        return <LibrarySearch />;
      case 'library-feedback-component':
        return <ContactComponent feedbackType='library' />;

      default:
        return <p>No return</p>;
    }
  };

  if (isLoading) return <Loader />;
  //More props is available @ https://github.com/react-grid-layout/react-grid-layout
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
        isResizable={isChangeable}
        isDraggable={isChangeable}
        autoSize={true}
      >
        {layout?.map((component) => (
          <div className='item-container' key={component.i} data-grid={{ x: component.x, y: component.y, w: component.w, h: component.h }}>
            {handleComponent(component)}
          </div>
        ))}
      </ResponsiveGridLayout>
      <button className='Grid-button' onClick={() => setIsChangeable(!isChangeable)}>
        on/off
      </button>
      <button className='Grid-button' onClick={() => updateItem(page)}>
        Save layout
      </button>
    </div>
  );
}

export default Grid;
