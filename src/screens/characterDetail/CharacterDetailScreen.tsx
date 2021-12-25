import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import WithLayout from "../../layout/Layout";

//styles
import "./CharacterDetailScreen.scss";

//query
import { useFetchCharacterDetailQuery } from "../../graphql/queries/useFetchCharacterDetailQuery";

type PropType = {
  id: number;
};
type RouterParam = {
  params: PropType;
};
const CharacterDetailScreen = ({ match }: { match: RouterParam }) => {
  const history = useHistory();
  const { character, loading } = useFetchCharacterDetailQuery(match.params.id);

  useEffect(() => {}, [match.params.id]);

  useEffect(() => {
    const brandmark = "Rick and Morty";
    const pageTitle = character?.name || "unknown";
    document.title = pageTitle + " | " + brandmark || brandmark;
  }, [character]);

  return WithLayout(
    !loading && (
      <div className="characterDetail">
        <div className="characterDetail__banner">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <img
            className="characterDetail__cover"
            src={character?.image}
            alt=""
          />
          <div className="characterDetail__name">{character?.name}</div>
        </div>
        <h1 className="characterDetail__backRow">
          <span onClick={() => history.push(`/`)}>Return to Home</span>
        </h1>
        <div className="characterDetail__content">
          <h4 className="characterDetail__content__header">Origin : </h4>
          <h4>{character?.origin?.name || "-"}</h4>
          <br />
          <h4 className="characterDetail__content__header">Last Episodes :</h4>
          <ul>
            {character?.episode
              ?.slice(-5)
              .reverse()
              .map((episode, i) => (
                <li key={i}>
                  {episode.name} ({episode.episode})
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default CharacterDetailScreen;
