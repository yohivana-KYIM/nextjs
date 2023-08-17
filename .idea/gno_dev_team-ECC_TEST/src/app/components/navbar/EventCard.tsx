import { Monitor } from 'react-feather';
import { Clock, MapPin} from 'react-feather';

type Props = {
  data: {
    type: string;
    titre: string;
    hd: string;
    hf: string;
    date: string;
    ville: string;
    pays: string;
  };
}

export default function EventCard({ data }: Props) {
  return (
    <div className="w-full flex flex-col items-start bg-slate-50 justify-start rounded-md p-3 cursor-pointer transition-all ease-in-out delay-200">
      <div className="w-full h-48 bg-slate-600 rounded-md mb-5"></div>
      <div className="flex flex-col w-full">
        <h4 className="text-sm text-gray-400 font-semibold">{data.type}</h4>
        <h1 className="truncate text-xl text-zinc-800 font-bold my-2">{data.titre}</h1>
        <div className="flex flex-col">
          <div className="flex items-center w-full">
            <Clock className="w-4 h-4 mr-2 text-gray-600" />
            <h2 className="truncate text-base text-zinc-700 font-normal mb-2">{`${data.hd}-${data.hf}, ${data.date}`}</h2>
          </div>

          {data.type === 'Livestream' ? (
            <div className="flex items-center w-full">
              <Monitor className="w-4 h-4 mr-2 text-gray-600" />
              <h2 className="truncate text-base text-blue-500">En ligne</h2>
            </div>
          ) : (
            <div className="flex items-center w-full">
              <MapPin className="w-4 h-4 mr-2 text-gray-600" />
              <h2 className="truncate text-base text-blue-500">{`${data.ville}, ${data.pays}`}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
