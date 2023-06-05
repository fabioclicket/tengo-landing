import CodeImg from '../assets/codeImg.png'
import MethodsImg from '../assets/methods.png'
function Integrate() {
  return (
    <div
      className='relative h-full flex flex-col bg-[#1E1E1E] md:grid md:grid-cols-2'
      id='integracion'
    >
      <div className='flex flex-col py-14 px-6 justify-center items-end md:p-20'>
        <div className='flex flex-col gap-6 '>
          <h3 className='text-[#DA4F31] uppercase text-md'>
            INTEGRACIÓN
          </h3>
          <p className='text-3xl font-body max-w-lg pr-10 md:text-4xl'>
            Empieza a{' '}
            <span className='text-[#DA4F31] font-semibold'>
              vender en línea
            </span>{' '}
            tengas o no una página web.{' '}
          </p>
          <p className='max-w-md text-[#E0E0E0] text-base md:text-lg md:pr-4'>
            Integra y administra todo desde nuestra plataforma, genera
            links de pago sin necesidad de una sola línea de código o
            integra de manera sencilla tu sitio web con nuestro API.
          </p>
        </div>
      </div>
      <div className='relative w-full h-full flex items-center justify-center z-40'>
        <img
          src={CodeImg}
          alt='code image'
          className='object-cover w-full'
        />
        <img
          src={MethodsImg}
          alt='methods image'
          className='object-cover absolute z-50 top-[50%] -translate-y-[50%] md:left-5 md:w-2/3'
        />
      </div>
    </div>
  )
}

export default Integrate
