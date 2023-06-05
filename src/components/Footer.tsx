import FacebookIcon from '../assets/Facebook.png'
import InstagramIcon from '../assets/Instagram.png'

function Footer() {
  return (
    <footer className='w-[90%] max-w-5xl mx-auto py-6 md:pr-5 md:w-full text-black flex items-center justify-between border-t-[1px] border-[#D9D9D9]'>
      <div className='flex flex-col gap-2 md:flex-row'>
        <p className='text-xs font-semibold text-black gap-2 flex'>
          Copyright 2023 ® Wolipay <span className='hidden md:block text-[#89C9E7]'>|</span>
        </p>
        <p className='text-xs text-[#7B7B7B]'>Marca de Wolivin Group S.A.</p>
      </div>
      <div className='flex items-center gap-4'>
        <img
          className='w-7 h-7 cursor-pointer'
          src={FacebookIcon}
          alt='facebook icon'
        />
        <img
          className='w-7 h-7 cursor-pointer'
          src={InstagramIcon}
          alt='instagram icon'
        />
      </div>
    </footer>
  )
}

export default Footer
