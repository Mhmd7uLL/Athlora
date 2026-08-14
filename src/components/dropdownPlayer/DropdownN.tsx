import { useState } from "react";
import { Info } from "lucide-react";

interface DropdownNProps {
  selectedPlayer: string;
  setSelectedPlayer: React.Dispatch<React.SetStateAction<string>>;
}

function DropdownN({ selectedPlayer, setSelectedPlayer}: DropdownNProps) {
  const [open, setOpen] = useState(false);

  const players = [
    "Alisson, 1",
    "Wesley, 2",
    "Gabriel Magalhaes, 3",
    "Marquinhos, 4",
    "Casemiro, 5",
    "Alex Sandro, 6",
    "Vinicius Junior, 7",
    "Bruno Guimaraes, 8",
    "Matheus Cunha, 9",
    "Neymar, 10",
    "Raphinha, 11",
    "Weverton, 12",
    "Danilo, 13",
    "Bremer, 14",
    "Leo Pereira, 15",
    "Douglas Santos, 16",
    "Fabinho, 17",
    "Danilo Santos, 18",
    "Endrick, 19",
    "Lucas Paqueta, 20",
    "Luiz Henrique, 21",
    "Martinelli, 22",
    "Ederson, 23",
    "Ibanez, 24",
    "Igor Thiago, 25",
    "Rayan, 26",
  ];

  return (
    <div className="mt-5 relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between bg-gray-300 rounded-3xl border border-gray-300 px-4 py-4 hover:border-blue-500"
      >
        {selectedPlayer}
        <span>⌄</span>
      </button>
      <div className="flex flex-row gap-3 items-center py-2">
        <Info size={20} className="text-blue-500"></Info>
        <p className="text-xs">
          Choosing a real player's name will incur an additional fee of $25.
        </p>
      </div>

      {open && (
        <div className="absolute z-10 mt-2 w-full rounded border bg-white shadow">
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

export default DropdownN;
