import ReturnImg from '../assets/returnsImg.png'

function ReturnsPage() {
  return (
    <div
      className='flex flex-col-reverse items-center text-black gap-8 md:gap-32 md:flex-row'
      id='devoluciones'
    >
      <div className='h-full'>
        <img
          src={ReturnImg}
          alt='card image'
          className='object-cover'
        />
      </div>
      <div className='flex flex-col gap-6 justify-center py-12 px-5 md:p-0'>
        <h3 className='text-[#9C2A1099] uppercase text-md'>
          Devoluciones
        </h3>
        <p className='text-3xl font-body max-w-3xl pr-2 md:text-4xl'>
          Incrementa tus ventas con{' '}
          <span className='text-[#DA4F31] font-semibold'>
            políticas de devolución
          </span>{' '}
          y gestiona todo desde Wolipay.{' '}
        </p>
        <p className='max-w-2xl text-[#AAAAAA] text-base pr-5 md:text-lg md:pr-0'>
          Optimiza tus ventas con políticas de devolución efectivas.
          Incrementa la confianza del cliente al ofrecer devoluciones
          fáciles. Gestiona todo de manera conveniente desde nuestra
          plataforma, maximizando la satisfacción del cliente y el
          crecimiento de tu negocio.
        </p>
      </div>
    </div>
  )
}

export default ReturnsPage
