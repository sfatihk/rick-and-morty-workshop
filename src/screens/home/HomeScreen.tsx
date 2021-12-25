import React, { useEffect } from "react";

import CharacterList from "../../containers/characterList/CharacterList";
import WithLayout from "../../layout/Layout";

const HomeScreen = () => {
  useEffect(() => {
    const brandmark = "Rick and Morty";
    document.title = brandmark;
  }, []);
  return WithLayout(
    <>
      <CharacterList />
    </>
  );
};

export default HomeScreen;
