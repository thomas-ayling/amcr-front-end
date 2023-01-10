import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Diagram.css';
import diagramArray from './diagramArray';

function Diagram() {
  const [nodeNum, setNodeNum] = useState(3);
  const [nodes, setNodes] = useState({ id: undefined, title: undefined, body: undefined });
  const [diagramInputs, setDiagramInputs] = useState();

  useEffect(() => {
    const tempNodes = diagramArray.map((node) => ({
      id: node.id,
      title: node.title,
      body: node.body,
    }));

    // console.dir(tempNodes);

    setNodes(tempNodes);

    setDiagramInputs(
      diagramArray.map((element, i) => (
        <div className='popup-container' key={i}>
          <div className='title--input'>
            <textarea className='builder--textarea builder--textarea-title' placeholder='Title' name='title' value={element.title} onChange={(e) => handleTitleChange(e, i)} />
          </div>
          <div className='body--input'>
            <textarea className='builder--textarea builder--textarea-body' placeholder='Content' name='body' value={element.body} onChange={(e) => handleBodyChange(e, i)} />
          </div>
        </div>
      ))
    );
  }, []);

  const handleTitleChange = (e, i) => {
    const node = nodes[i];
    setNodes((node.title = e.target.value));
  };

  const handleBodyChange = (e, i) => {
    const node = nodes[i];
    setNodes((node.body = e.target.value));
  };

  const popupItem = (
    <Popup trigger={<button className='round--btn'></button>} position='bottom center' on={['hover', 'focus']} contentStyle={{ width: '350px' }}>
      <div className='popup-container'>
        <div className='popup-title'>{nodes.title}</div>
        <div className='popup-body'>{nodes.body}</div>
      </div>
    </Popup>
  );

  const arrowLR = (
    <>
      <div className='arrow--line' />
      <div className='triangle--lr' />
    </>
  );

  const arrowRL = (
    <>
      <div className='arrow--line' />
      <div className='triangle--rl' />
    </>
  );

  const row = (
    <div className='row--component'>
      {popupItem}
      {arrowLR}
      {popupItem}
      {arrowLR}
      {popupItem}
    </div>
  );

  const reverseRow = (
    <div className='reverse--row--component'>
      {popupItem}
      {arrowRL}
      {popupItem}
      {arrowRL}
      {popupItem}
    </div>
  );

  const empty = <div className='grid--item grid--empty'></div>;

  // function handleChange(e) {
  //     const {name, value} = e.target;
  //     setNode(prevNode =>{
  //         return {
  //             ...prevNode,
  //             [name]: value
  //         }
  //     })
  // }

  const finalInputs = (
    <div className='popup-container'>
      <div className='title--input'>
        <textarea className='builder--textarea builder--textarea-title' placeholder='Title' />
      </div>
      <div className='body--input'>
        <textarea className='builder--textarea builder--textarea-body' placeholder='Content' />
      </div>
    </div>
  );

  function changeDiagramInputs(e) {
    setNodeNum(e.target.value);
  }

  return (
    <>
      <div className='builder--container'>
        <div className='number--dropdown'>
          <label htmlFor='nodeNum'>Choose number of nodes</label>
          <select id='nodeNum' value={nodeNum} name='nodeNum' onChange={changeDiagramInputs}>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
          </select>
        </div>
        {diagramInputs}
      </div>
      <div className='grid--container'>
        {empty}
        {<div className='grid--item grid--row'>{row}</div>}
        <div className='grid--item grid--ta-lr'></div>
        <div className='grid--item grid--ta-rl'></div>
        <div className='grid--item grid--row-rev'>{reverseRow}</div>
        <div className='grid--item grid--ba-lr'></div>
        <div className='grid--item grid--ba-rl'></div>
        <div className='grid--item grid--row'>{row}</div>
        {empty}
      </div>
    </>
  );
}

export default Diagram;
