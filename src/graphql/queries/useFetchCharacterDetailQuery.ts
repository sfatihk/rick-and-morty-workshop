import { gql, useQuery } from "@apollo/client";
import ICharacter from "../../types/ICharacter";

export interface FetchCharacterDetailQueryResponse {
  character: ICharacter;
}
export const FETCH_CHARACTER_DETAIL = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      image
      name
      origin {
        name
      }
      episode {
        name
        episode
      }
    }
  }
`;

interface IQuery {
  character: ICharacter | undefined;
  loading: boolean;
}

export function useFetchCharacterDetailQuery(id: number): IQuery {
  const { data, loading } = useQuery<FetchCharacterDetailQueryResponse>(
    FETCH_CHARACTER_DETAIL,
    {
      variables: {
        id: id,
      },
    }
  );

  return { character: data?.character, loading };
}
