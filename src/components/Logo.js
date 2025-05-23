// src/components/Logo.js
import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/images/logo-cabral-beer.jpg"
      alt="Cabral Beer Delivery"
      width={150}
      height={40}
      className="object-contain scale-70"
    />
  );
}
