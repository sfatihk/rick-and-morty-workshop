import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

//components
import Character from "../../components/character/Character";

//styles
import "./CharacterList.scss";

//query
import { useFetchCharactersQuery } from "../../graphql/queries/useFetchCharactersQuery";

const CharacterList = () => {
  const {
    characters,
    count,
    currentPage,
    nextPage,
    getCharacters,
    getMoreCharacters,
  } = useFetchCharactersQuery();

  useEffect(() => {
    getCharacters({ variables: { page: 1 } });
  }, [getCharacters]);

  const loadMore = () =>
    nextPage !== null && getMoreCharacters(currentPage + 1);
  return (
    <InfiniteScroll
      className="characterList"
      dataLength={count}
      next={loadMore}
      hasMore={true}
      loader={nextPage !== null ? <h4>Loading...</h4> : <></>}
    >
      {characters?.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </InfiniteScroll>
  );
};

export default CharacterList;
