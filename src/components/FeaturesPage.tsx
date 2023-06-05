import CardImage from '../assets/logoCard.png'

function FeaturesPage() {
  return (
    <div className='flex flex-col items-center my-16' id='features'>
      <h3 className='text-[#89C9E7] mb-3 uppercase text-md'>
        Features
      </h3>
      <p className='font-body text-black text-center text-3xl max-w-lg leading-8'>
        Desarrollamos el{' '}
        <span className='text-[#DA4F31] font-semibold'>
          mejor producto
        </span>{' '}
        para tu negocio o emprendimiento
      </p>

      <div className='my-20 flex flex-wrap items-center justify-center gap-10'>
        <img
          src={CardImage}
          alt='card image'
          className='w-52 h-52 object-cover rounded-3xl rotate-180'
        />
        <img
          src={CardImage}
          alt='card image'
          className='w-52 h-52 object-cover rounded-3xl -mb-32 rotate-180'
        />
        <img
          src={CardImage}
          alt='card image'
          className='w-52 h-52 object-cover rounded-3xl rotate-180'
        />
        <img
          src={CardImage}
          alt='card image'
          className='w-52 h-52 object-cover rounded-3xl -mb-32 rotate-180'
        />
      </div>
    </div>
  )
}

export default FeaturesPage
