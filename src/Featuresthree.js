import React from "react";
import {
  accentCyan,
  accentRed,
  accentYellow,
  primaryColor,
} from "./constants/constant";
import {
  faCheck,
  faCode,
  faPencil,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import MotoColumn from "./components/MotoColumn";

export default function Featuresthree() {
  return (
    <div className="d-flex flex-warap justify-content-around align-items-center py-5">
        <MotoColumn
          color={primaryColor}
          icon={faCode}
          toptext={"Bring Ideas to Life"}
        />
        <MotoColumn
          color={accentCyan}
          icon={faCheck}
          toptext={"Success Everyday"}
        />
        <MotoColumn
          color={accentYellow}
          icon={faSuitcase}
          toptext={"Build Products"}
        />
        <MotoColumn
          color={accentRed}
          icon={faPencil}
          toptext={"Success Everyday"}
        />
    </div>
  );
}
