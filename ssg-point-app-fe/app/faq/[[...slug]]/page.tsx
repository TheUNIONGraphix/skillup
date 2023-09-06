import React from 'react'

function page({ params }: { params: { slug: string[] } }) {
    console.log(params)
  return (
    <div>
        <h1>faq page</h1>
        <div>slug: 
            {
                params.slug ? 
                params.slug.map((slug: string) => (
                    <p key={slug}>{slug}</p>
                ))
                : <p>no Slug</p>
            }
        </div>
    </div>

  )
}

export default page