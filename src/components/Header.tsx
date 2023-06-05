type Props = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ setShowLogin }: Props) {
  return (
    <header className='w-full h-auto max-w-[1390px] flex absolute top-0 z-50 self-center'>
      <div className='w-full flex items-center justify-between py-1 px-8 md:px-2'>
        <nav className='w-full font-body z-50 hidden md:block'>
          <ul className='w-full flex gap-8 py-5 px-10 justify-end items-center font-bold'>
            <a href='#pagos'>
              <li className='max-h-max cursor-pointer relative group transition-all duration-300'>
                Pagos
                <span className='inline-block absolute w-0 mx-auto group-hover:w-full h-1 rounded-3xl bg-[#DA4F31] right-0 left-0 -bottom-1 transition-all duration-300'></span>
              </li>
            </a>
            <a href='#reportes'>
              <li className='max-h-max cursor-pointer relative group transition-all duration-300'>
                Reportes
                <span className='inline-block absolute w-0 mx-auto group-hover:w-full h-1 rounded-3xl bg-[#DA4F31] right-0 left-0 -bottom-1 transition-all duration-300'></span>
              </li>
            </a>
            <a href='#devoluciones'>
              <li className='max-h-max cursor-pointer relative group transition-all duration-300'>
                Devoluciones
                <span className='inline-block absolute w-0 mx-auto group-hover:w-full h-1 rounded-3xl bg-[#DA4F31] right-0 left-0 -bottom-1 transition-all duration-300'></span>
              </li>
            </a>
            <a href='#integracion'>
              <li className='max-h-max cursor-pointer relative group transition-all duration-300'>
                Integración
                <span className='inline-block absolute w-0 mx-auto group-hover:w-full h-1 rounded-3xl bg-[#DA4F31] right-0 left-0 -bottom-1 transition-all duration-300'></span>
              </li>
            </a>
            <li
              onClick={() => setShowLogin(true)}
              className='bg-white py-2 px-8 text-[#DA4F31] rounded-3xl cursor-pointer hover:bg-[#DA4F31] hover:text-white transition-all duration-500'
            >
              Ingresar
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
