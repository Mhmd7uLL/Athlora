import { useState } from "react";

interface BahasaProps {
  onClose: () => void;
}

function Bahasa({ onClose }: BahasaProps) {
  const [selectedLoc, setSelectedLoc] = useState("Indonesia USD $");
  const [selectedLang, setSelectedLang] = useState("English");

  const [openLoc, setOpenLoc] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const Loc = ["Indonesia USD $", "Indonesia EUR €"];
  const Lang = ["English", "Spanish", "Indonesian"];

  return (
    <div className="absolute right-40 top-20 z-50 flex rounded-lg">
      <div className="w-100 rounded-lg bg-white p-5 text-black shadow-2xl">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="font-medium">Languages</h1>
          </div>
          <button onClick={onClose}>x</button>
        </div>
        <hr className="my-3"></hr>
        <div className="flex flex-col gap-1 font-medium text-sm">
          <label>Choose Your Location</label>
          <button
            onClick={() => setOpenLoc(!openLoc)}
            className="flex justify-between text-start border border-gray-200 p-3 rounded-xl"
          >
            {selectedLoc}
            <span>v</span>
          </button>
        </div>
        {openLoc && (
          <div className="font-medium text-sm mt-2 max-h-55 overflow-y-auto w-90 rounded-xl border border-gray-200 shadow-2xl bg-white py-2">
            {Loc.map((location) => (
              <button
                key={location}
                onClick={() => {
                  setSelectedLoc(location);
                  setOpenLoc(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {location}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-1 mt-6 font-medium text-sm">
          <label>Choose Your Language</label>
          <button
            onClick={() => setOpenLang(!openLang)}
            className="flex justify-between text-start border border-gray-200 p-3 rounded-xl"
          >
            {selectedLang}
            <span>v</span>
          </button>
        </div>
        {openLang && (
          <div className="font-medium text-sm mt-2 max-h-55 overflow-y-auto w-90 rounded-xl border border-gray-200 shadow-2xl bg-white py-2">
            {Lang.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setSelectedLang(lang);
                  setOpenLang(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bahasa;
