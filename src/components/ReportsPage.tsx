import PartnerImage from '../assets/partnerImage.png'

function ReportsPage() {
  return (
    <div
      className='flex flex-col mt-4 md:mt-10 text-black bg-[#DA4F311A] md:grid md:grid-cols-2'
      id='reportes'
    >
      <div className='flex flex-col gap-6 pt-14 pb-8 px-6 justify-center items-end md:pr-12 md:p-20'>
        <div className='flex flex-col gap-6'>
          <h3 className='text-[#DA4F31] uppercase text-md'>
            REPORTES
          </h3>
          <p className='text-3xl font-body max-w-lg md:pr-10 md:text-4xl'>
            Analiza tus ventas en{' '}
            <span className='text-[#DA4F31] font-semibold'>
              tiempo real
            </span>{' '}
            y administra tus cobros.{' '}
          </p>
          <p className='max-w-md text-[#7B7B7B] md:text-lg'>
            Optimiza tus ventas con análisis en tiempo real y controla
            tus cobros de manera eficiente. Toma decisiones
            informadas, identifica oportunidades y maximiza el
            rendimiento de tu negocio.
          </p>
        </div>
      </div>
      <div>
        <img
          src={PartnerImage}
          alt='card image'
          className='object-cover w-full'
        />
      </div>
    </div>
  )
}

export default ReportsPage
