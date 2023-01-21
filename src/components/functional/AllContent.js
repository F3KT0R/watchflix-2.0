import React, { useEffect, useState } from 'react';
import { useFetch } from '../utils/useFetch';
import { ContentCard } from './ContentCard';
import { Content } from './Content';
import { Search } from './Search';

export const AllContent = ({ fetchUrl, searchUrl }) => {
  const [content, setContent] = useState([]);
  const [pickedContent, setPickedContent] = useState();
  const data1 = useFetch(fetchUrl, 1);
  const data2 = useFetch(fetchUrl, 2);
  const data3 = useFetch(fetchUrl, 3);

  useEffect(() => {
    setContent(data1);
    setContent((curr) => [...curr, ...data2]);
    setContent((curr) => [...curr, ...data3]);
  }, [data1, data2, data3]);

  return (
    <div>
      {pickedContent || <Search callback={setPickedContent} url={searchUrl} />}
      <div className='grid align-middle self-center items-center 3xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 xs:grid-cols-3'>
        {pickedContent ? (
          <div className='grid col-span-6'>
            <Content {...pickedContent} callback={setPickedContent} />
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
    </div>
  );
};
