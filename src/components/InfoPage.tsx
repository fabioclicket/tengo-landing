import CardImage from '../assets/logoCard.png'

function InfoPage() {
  return (
    <div className='text-black mx-auto p-20 px-10 grid grid-cols-2 gap-20 mb-16' id='resultados'>
      <div>
        <div className='flex flex-col gap-6'>
          <h3 className='text-[#89C9E7] uppercase text-md'>
            Nosotros
          </h3>
          <p className='text-3xl font-body max-w-xs'>
            Somos{' '}
            <span className='text-[#DA4F31] font-semibold'>
              expertos
            </span>{' '}
            en{' '}
            <span className='text-[#DA4F31] font-semibold'>
              pagos en línea
            </span>
          </p>
          <p className='max-w-xs pr-32'>
            Quienes somos vendedor desde cuando
          </p>
        </div>

        <div className='flex items-center gap-10 mt-8'>
          <img
            src={CardImage}
            alt=''
            className='w-72 h-28 object-cover rotate-180'
          />
          <img
            src={CardImage}
            alt=''
            className='w-72 h-28 object-cover -mb-16 rotate-180'
          />
        </div>
      </div>
      <div className='flex justify-end'>
        <img
          src={CardImage}
          alt=''
          className='w-80 h-full object-cover rotate-180'
        />
      </div>
    </div>
  )
}

export default InfoPage
