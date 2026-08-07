import { useState } from "react";
import { Info } from "lucide-react";

function DropdownP() {
  const [open, setOpen] = useState(false);
  const [activePlayers, setActivePlayers] = useState("Select Player");

  const players = [
    "David Raya, 1",
    "Marc Pubill, 2",
    "Alex Grimaldo, 3",
    "Eric Garcia, 4",
    "Marcos Llorente, 5",
    "Mikel Merino, 6",
    "Ferran Torres, 7",
    "Fabian Ruiz, 8",
    "Gavi, 9",
    "Dani Olmo, 10",
    "Yeremy Pino, 11",
    "Pedro Porro, 12",
    "Joan Garcia, 13",
    "Aymeric Laporte, 14",
    "Alex Baena, 15",
    "Rodri, 16",
    "Nico Williams, 17",
    "Martin Zubimendi, 18",
    "Lamine Yamal, 19",
    "Pedri, 20",
    "Mikel Oyarzabal, 21",
    "Pau Cubarsi, 22",
    "Unai Simon, 23",
    "Marc Cucurella, 24",
    "Victor Munoz, 25",
    "Borja Iglesias, 26",
  ];

  return (
    <div className="mt-5 relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between bg-gray-300 rounded-3xl border border-gray-300 px-4 py-4 hover:border-blue-500"
      >
        {activePlayers}
        <span>⌄</span>
      </button>
      <div className="flex flex-row gap-3 items-center py-2">
      <Info size={20} className="text-blue-500"></Info><p className="text-xs">Choosing a real player's name will incur an additional fee of $10.</p>
      </div>

      {open && (
        <div className="absolute z-10 mt-2 w-full rounded border bg-white shadow">
          {players.map((player) => (
            <button
              key={player}
              onClick={() => {
                setActivePlayers(player);
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
