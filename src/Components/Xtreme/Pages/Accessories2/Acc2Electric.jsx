import React from "react";
import style from "./acc2.module.css";

const Acc2Electric = () => {
  return (
    <div className={style.acc2ElectricContainer}>
      <ul>
        <li>
          <span>Charging Cables and Adapters:</span> Our Service stations will
          offer a range of charging cables and adapters compatible with
          different types of charging stations. This ensures EV owners have the
          necessary equipment to charge their vehicles at home, at public
          charging stations, or on the go.
        </li>
        <li>
          <span>Portable Charging Units:</span> Our service stations will
          provide portable charging units or EVSE (Electric Vehicle Supply
          Equipment) for emergency charging situations. These units can be handy
          if an EV runs out of charge away from a charging station.
        </li>
        <li>
          <span> Wall-Mounted Charging Stations:</span> Our Service stations
          will offer installation services for wall-mounted charging stations at
          customers' homes or businesses. These stations provide a convenient
          and efficient way to charge EVs overnight or during the day.
        </li>
        <li>
          <span>Battery Health Checkups</span>: Our stations will offer battery
          health checkups and diagnostic services to assess the condition and
          performance of an EV's battery pack. This helps owners identify any
          issues early on and ensure optimal battery health and longevity.
        </li>
        <p>and many more...</p>

      </ul>
    </div>
  );
};

export default Acc2Electric;
