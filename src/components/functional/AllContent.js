import React, { useEffect, useState } from 'react';
import { ContentCard } from './ContentCard';
import { ContentDesktop } from './ContentDesktop';
import { ContentMobile } from './ContentMobile';
import { Search } from './Search';
import { Popup } from './Popup';
import { useQuery } from '@tanstack/react-query';
import { getContent } from '../utils/getContent';
import { requests } from '../utils/requests';

export const AllContent = ({ toggle, pickedToggle }) => {
  const [pickedContent, setPickedContent] = useState(null);
  const [popup, setPopup] = useState(false);

  const movieData = useQuery({
    queryKey: ['movies'],
    queryFn: () => getContent(requests('movie').fetchPopular),
  });

  const tvData = useQuery({
    queryKey: ['tvs'],
    queryFn: () => getContent(requests('tv').fetchPopular),
  });

  useEffect(() => {
    pickedToggle(pickedContent);
  }, [pickedContent]);

  if (movieData.isLoading) return <h1>Loading...</h1>;
  if (movieData.isError || tvData.isError)
    return <pre>{JSON.stringify(movieData.error)}</pre>;

  return (
    <>
      {!pickedContent && <Search callback={setPickedContent} toggle={toggle} />}
      <div className='grid 3xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 xs:grid-cols-3'>
        {popup && <Popup callback={setPopup} content={pickedContent} />}
        {pickedContent ? (
          <>
            <div className='xs:grid lg:hidden md:col-span-4 xs:col-span-3'>
              <ContentMobile
                {...pickedContent}
                callbackToggle={setPickedContent}
                callbackPopup={setPopup}
                toggle={toggle}
              />
            </div>
            <div className='xs:hidden lg:grid 3xl:col-span-6 lg:col-span-5'>
              <ContentDesktop
                {...pickedContent}
                callbackToggle={setPickedContent}
                callbackPopup={setPopup}
                toggle={toggle}
              />
            </div>
          </>
        ) : movieData.data && tvData.data && toggle === 'movie' ? (
          movieData.data.map((item) => {
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
        ) : (
          tvData.data.map((item) => {
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
