import { gql, useLazyQuery } from "@apollo/client";
import ICharacter from "../../types/ICharacter";

export interface FetchCharactersQueryResponse {
  characters: {
    results: ICharacter[];
    info: {
      count: number;
      pages: number;
      prev: number | null;
      next: number | null;
    };
  };
}
export const FETCH_CHARACTERS = gql`
  query ($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        prev
        next
      }

      results {
        id
        name
        image
      }
    }
  }
`;

export const mergePolicyCharacters = (existing: any = [], incoming: any) => {
  let existingResults: any[] = [];
  if (existing && existing.results) {
    existingResults = existing.results;
  }
  return {
    info: incoming?.info,
    results: [...existingResults, ...incoming?.results],
  };
};

interface IQuery {
  characters: ICharacter[] | undefined;
  count: number;
  currentPage: number;
  nextPage: number | null;
  getCharacters: (payload: { variables: { page: number } }) => any;
  getMoreCharacters: (page: number) => any;
}

export function useFetchCharactersQuery(): IQuery {
  const [getCharacters, { data, fetchMore }] =
    useLazyQuery<FetchCharactersQueryResponse>(FETCH_CHARACTERS);

  const prevPage = data?.characters?.info?.prev;
  const currentPage = prevPage && prevPage != null ? prevPage + 1 : 1;
  const nextPage = data?.characters.info?.next || null;

  const getMoreCharacters = (page: number) => {
    fetchMore({ variables: { page: page } });
  };

  return {
    characters: data?.characters?.results,
    count: data?.characters.results?.length || 0,
    currentPage: currentPage,
    nextPage: nextPage,
    getCharacters,
    getMoreCharacters,
  };
}
