import GameProperties from "../../Components/GameProperties/GameProperties";
import Matrix from "../../Components/Matrix/Matrix";

import "./Container.scss";

const Container = () => {
  return (
    <div className="main-container">
      <GameProperties />
      <Matrix />
    </div>
  );
};

export default Container;
