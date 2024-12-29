// links
import Link from 'next/link';

// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinFill,
  RiGithubFill
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/damodhar-datta-reddy-likki-4030052b7/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinFill />
      </Link>
      <Link href={'https://github.com/likkidamu'} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
      <Link href={'https://www.facebook.com/damu.reddy.52'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      
    </div>
  );
};

export default Socials;
