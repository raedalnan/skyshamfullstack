import Image from 'next/image';

interface DestinationCardProps {
  name: string;
  image: string;
  teaser: string;
  onViewDetails: () => void;
}

export const DestinationCard = ({ name, image, teaser, onViewDetails }: DestinationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={`${name} destination`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="mt-2 text-sm opacity-90">{teaser}</p>
          <button
            onClick={onViewDetails}
            className="mt-4 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}; 