import HeaderBottom from "./HeaderBottom"
import HeaderTop from "./HeaderTop"

const Header = () => {

  const point = 10;

  return (
    <header className='main_header'>
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}

export default Header