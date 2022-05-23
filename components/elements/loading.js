
import Image from 'next/image'
import gif from '@/public/images/loader-info.gif'

export default () => <Image src={gif.src} layout='fill' className='opacity-40' priority />;