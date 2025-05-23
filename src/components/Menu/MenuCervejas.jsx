import Image from 'next/image';

const cervejasMenuItems = [
  {
    id: 'CervBOH600ml',
    name: 'Boh 600ml',
    img: '/images/categories/cervejas/CervBOH600ml.png',
  },
  {
    id: 'CervSKOL600ml',
    name: 'Skol 600ml',
    img: '/images/categories/cervejas/CervSKOL600ml.png',
  },
  {
    id: 'LataEISEN473',
    name: 'Eisen 473ml',
    img: '/images/categories/cervejas/LataEISEN473.png',
  },
  {
    id: 'LataKAIS473ml',
    name: 'Kaiser 473ml',
    img: '/images/categories/cervejas/LataKAIS473ml.png',
  },
  {
    id: 'LataLOK473ml',
    name: 'Lok 473ml',
    img: '/images/categories/cervejas/LataLOK473ml.png',
  },
  {
    id: 'LataORIG473ml',
    name: 'Original 473ml',
    img: '/images/categories/cervejas/LataORIG473ml.png',
  },
  {
    id: 'LataSKOL473ml',
    name: 'Skol 473ml',
    img: '/images/categories/cervejas/LataSKOL473ml.png',
  },
  {
    id: 'LataSPAT473ml',
    name: 'Spaten 473ml',
    img: '/images/categories/cervejas/LataSPAT473ml.png',
  },
];

export default function MenuCervejas() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cervejasMenuItems.map(({ id, name, img }) => (
        <div key={id} className="border rounded p-2 flex flex-col items-center">
          <Image src={img} alt={name} width={120} height={120} />
          <p className="mt-2 text-center font-semibold">{name}</p>
        </div>
      ))}
    </div>
  );
}

