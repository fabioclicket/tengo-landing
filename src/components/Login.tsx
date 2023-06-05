import WoliLogo from '../assets/wolipay-logo-color.png'

type Props = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
}

function Login({ setShowLogin }: Props) {
  return (
    <div className='flex items-center justify-center min-h-screen w-full'>
      <div className='w-[90%] max-w-[460px] border border-slate-200 rounded-xl p-10 md:p-16'>
        <div className='w-40 mx-auto py-2 mb-10'>
          <img src={WoliLogo} alt='' />
        </div>
        <div className='flex flex-col gap-4 text-black'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='text-xs'>
              Correo electronico
            </label>
            <input
              type='email'
              id='email'
              placeholder='Ingresa tu correo electrónico'
              className='text-black bg-[#FDFCFC] pt-1 pb-2 px-2 rounded-md border border-[#B6B6B6] placeholder:text-sm'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-xs' htmlFor='password'>
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              className='text-black bg-[#FDFCFC] py-1 h-[38px] px-2 rounded-md border border-[#B6B6B6] placeholder:text-base'
              placeholder='*********'
            />
          </div>
        </div>
        <div className='w-full flex mt-20'>
          <a
            href='#'
            onClick={() => setShowLogin(false)}
            className='inline-flex w-full py-[6px] px-5 max-w-[160px] mx-auto justify-center bg-[#29BE6E] rounded-2xl text-sm'
          >
            Ingresar
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
