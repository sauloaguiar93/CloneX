import Image from "next/image"
import Link from "next/link"

export const Logo = ({ size }: props) => {
  return (
    <Link href="/">
        <Image 
            src={'/logo.png'}
            alt="Clone X"
            width={size}
            height={size}
            quality={100}
        />
    </Link>
  );
}
