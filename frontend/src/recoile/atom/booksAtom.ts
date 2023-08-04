import { atom } from 'recoil';

export const listBooksAtom = atom({
  key: 'booksListState',
  default: [],
});
