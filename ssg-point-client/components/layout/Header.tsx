import HeaderBottom from "./HeaderBottom"
import HeaderTop from "./HeaderTop"

const Header = () => {

  return (
    <header className='fixed w-full top-0 left-0 p-4 bg-white'>
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}

export default Header