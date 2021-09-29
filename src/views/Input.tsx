import React, { FC } from "react";
import { BandColor, MultiplierColor, ToleranceColor } from "../app/ICalculator";

type StateUpdater = {
  handle: (new_state: any) => void;
  state: any;
};

export const Input: FC<StateUpdater> = ({ handle, state }) => {
  const resistor_spec = [
    {
      letter: "A",
      colors: BandColor,
    },
    {
      letter: "B",
      colors: BandColor,
    },
    {
      letter: "C",
      colors: MultiplierColor,
    },
    {
      letter: "D",
      colors: ToleranceColor,
    },
  ];

  return (
    <div className="configuration">
      {resistor_spec.map(({ letter, colors }, i) => {
        return (
          <div key={`band_${i}`}>
            <div>
              <strong className='title'>Band {letter}</strong>
            </div>
            <div>
              <select
                className="dropdown"
                id={`band${letter}`}
                onChange={(e) => {
                  handle({
                    ...state,
                    [letter.toLocaleLowerCase()]: e.target.value,
                  });
                }}
              >
                <option value={undefined}> - </option>
                {(Object.keys(colors) as Array<keyof typeof colors>).map(
                  (key, i) => {
                    if (isNaN(parseInt(key)))
                      return (
                        <option key={i} value={`${key},${colors[key]}`}>
                          {key}
                        </option>
                      );
                    else return null;
                  }
                )}
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
};
