import { useState } from "react";
import { Info } from "lucide-react";

interface DropdownPProps {
  selectedPlayer: string;
  setSelectedPlayer: React.Dispatch<React.SetStateAction<string>>;
}

function DropdownP({ selectedPlayer, setSelectedPlayer }: DropdownPProps) {
  const [open, setOpen] = useState(false);

  const players = [
    "Diogo Costa, 1",
    "Nelson Semedo, 2",
    "Ruben Dias, 3",
    "Tomas Araujo, 4",
    "Diogo Dalot, 5",
    "Matheus Nunes, 6",
    "Cristiano Ronaldo, 7",
    "Bruno Fernandes, 8",
    "Goncalo Ramos, 9",
    "Bernardo Silva, 10",
    "Joao Felix, 11",
    "Jose Sa, 12",
    "Renato Veiga, 13",
    "Goncalo Inacio, 14",
    "Joao Neves, 15",
    "Fransisco Trincao, 16",
    "Rafael Leao, 17",
    "Pedro Neto, 18",
    "Goncalo Guedes, 19",
    "Joao Cancelo, 20",
    "Ruben Neves, 21",
    "Rui Silva, 22",
    "Vitinha, 23",
    "Samu Costa, 24",
    "Nuno Mendes, 25",
    "Fransisco Conceicao, 26",
  ];

  return (
    <div className="mt-5 relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between bg-gray-200 shadow-sm rounded-3xl border border-gray-200 px-4 py-4 hover:border-blue-500"
      >
        {selectedPlayer}
        <span>v</span>
      </button>
      <div className="flex flex-row gap-3 items-center py-2">
        <Info size={20} className="text-blue-500"></Info>
        <p className="text-xs">
          Choosing a real player's name will incur an additional fee of $25.
        </p>
      </div>

      {open && (
        <div className="absolute z-10 mt-2 max-h-55 overflow-y-auto w-full rounded-xl border border-blue-500 shadow-2xl bg-white py-2">
          {players.map((player) => (
            <button
              key={player}
              onClick={() => {
                setSelectedPlayer(player);
                setOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {player}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownP;
