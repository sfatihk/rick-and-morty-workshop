import renderer from "react-test-renderer";
import { ICharacter } from "../../types/ICharacter";
import Character from "./Character";

describe("Character components", () => {
  const initialState: ICharacter = {
    id: 1,
    name: "test",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    location: "earth",
    episode: {
      name: "aa",
      episode: "02x03",
    },
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Character {...initialState} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
