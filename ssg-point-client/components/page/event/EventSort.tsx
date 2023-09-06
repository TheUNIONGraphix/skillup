'use client'
import { useRouter } from 'next/navigation'

function EventSort({ pathName }: { pathName: string}) {
  const router = useRouter()

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/event/${pathName}?sort=${e.target.value}`)
  }

  return (
    <select onChange={handleSelect}>
      <option value={'new'}>최신순</option>
      <option value={'end'}>마감순</option>
    </select>
  )
}

export default EventSort