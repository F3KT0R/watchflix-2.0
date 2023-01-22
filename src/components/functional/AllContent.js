import React, { useEffect, useState } from 'react';
import { useFetch } from '../utils/useFetch';
import { ContentCard } from './ContentCard';
import { Content } from './Content';
import { Search } from './Search';
import { Popup } from './Popup';

export const AllContent = ({ fetchUrl, searchUrl, toggle, pickedToggle }) => {
  const [content, setContent] = useState([]);
  const [pickedContent, setPickedContent] = useState(null);
  const [popup, setPopup] = useState(false);
  const data1 = useFetch(fetchUrl, 1, toggle);
  const data2 = useFetch(fetchUrl, 2, toggle);
  const data3 = useFetch(fetchUrl, 3, toggle);

  useEffect(() => {
    setContent(data1);
    setContent((curr) => [...curr, ...data2]);
    setContent((curr) => [...curr, ...data3]);
  }, [data1, data2, data3]);

  useEffect(() => {
    pickedToggle(pickedContent);
  }, [pickedContent]);

  return (
    <>
      {!pickedContent && <Search callback={setPickedContent} url={searchUrl} />}
      <div className='grid 3xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 xs:grid-cols-3'>
        {popup && <Popup callback={setPopup} content={pickedContent} />}
        {pickedContent ? (
          <div className='grid 3xl:col-span-6 lg:col-span-5 md:col-span-4 xs:col-span-3'>
            <Content
              {...pickedContent}
              callbackToggle={setPickedContent}
              callbackPopup={setPopup}
            />
          </div>
        ) : (
          content &&
          content.map((item) => {
            return (
              <div
                onClick={() => setPickedContent(item)}
                key={item.id}
                className='xs:p-2 xl:p-4 2xl:p-6'
              >
                <ContentCard {...item} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
