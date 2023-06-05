import MobileImage from '../assets/woliMobileImage.png'

function AboutUsPage() {
  return (
    <div
      className='flex flex-col-reverse text-black px-4 my-12 md:my-14 md:px-12 md:grid md:grid-cols-2'
      id='pagos'
    >
      <div className='w-full h-full flex items-center self-end md:pl-32'>
        <img
          src={MobileImage}
          alt='card image'
          className='object-cover'
        />
      </div>
      <div className='flex flex-col p-4 mb-8 gap-6 justify-center md:p-20 md:mb-0'>
        <h3 className='text-[#9C2A1099] uppercase text-md'>
          MÉTODOS DE PAGO
        </h3>
        <p className='w-full text-3xl font-body md:max-w-xl md:pr-4 leading-8 md:text-4xl'>
          Acepta los{' '}
          <span className='text-[#DA4F31] font-semibold'>
            métodos de pago
          </span>{' '}
          más utilizados en Bolivia.{' '}
        </p>
        <p className='max-w-md text-[#AAAAAA] text-base md:text-lg'>
          Wolipay ofrece a tus clientes la posibilidad de pagar
          utilizando todos los métodos de pago disponibles para que
          nada te aleje de esa venta que quieres lograr.
        </p>
      </div>
    </div>
  )
}

export default AboutUsPage
