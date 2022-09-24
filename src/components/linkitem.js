import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LinkItem({
    href,
    title,
  }) {
    const { pathname } = useRouter();
    const isActive = pathname == href;
  
    return (
      <Link href={href}>
        <div
          className={`text-xs flex items-center cursor-pointer hover:scale-110 transition duration-100 font-novaregular text-black ${
            isActive ? 'scale-105 underline' : ''
          }`}
        >
          {title}
        </div>
      </Link>
    );
  }
  