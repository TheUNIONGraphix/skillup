'use client'
import React, { useEffect, useState } from 'react'
import EventBannerCard from './EventBannerCard'
import { useSearchParams } from 'next/navigation';


function EventBanner() {

  const [data, setData] = useState<any>();
  const query = useSearchParams();
  console.log("url quary ",query.get('sort'))
  
  return (
    <section>
        <div>
          <ul>
            {
              data && data.map((item:any) => (
                <EventBannerCard
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                />
              ))
            }
          </ul>
        </div>
      </section>
  )
}

export default EventBanner