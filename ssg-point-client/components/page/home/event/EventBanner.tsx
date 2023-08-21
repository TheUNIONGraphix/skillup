import React from 'react'
import EventBannerCard from './EventBannerCard'


function EventBanner({data}: {data: any}) {
  return (
    <section>
        <div>
          <ul>
            {
              data.map((item:any) => (
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