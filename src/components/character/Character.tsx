import ICharacter from "../../types/ICharacter";
import { useHistory } from "react-router-dom";

//styles
import "./Character.scss";
const Character = ({ id, name, image, episode, origin }: ICharacter) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`/characters/${id}`)}
      className="character"
    >
      <img src={image} alt="" className="character__thumbnail" />
      <div className="character__name">{name}</div>
    </div>
  );
};

export default Character;
