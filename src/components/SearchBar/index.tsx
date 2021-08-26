import React from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styles';

export type SearchBarType = TextInputProps & {
  firstChild?: boolean;
};

export default function SearchBar({...props}: SearchBarType) {
  return (
    <S.Container>
      <S.TextInput {...props} />
      <S.ButtonsContainer>
        <S.Button firstChild>
          <S.Text>Search</S.Text>
        </S.Button>
        <S.Button>
          <S.Text>Cancel</S.Text>
        </S.Button>
      </S.ButtonsContainer>
    </S.Container>
  );
}
