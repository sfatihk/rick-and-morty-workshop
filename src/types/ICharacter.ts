export default interface ICharacter {
  id: string;
  name: string;
  image: string;
  origin?: { name: string };
  episode?: [{ name: string; episode: string }];
}
