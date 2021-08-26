import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import SearchBar from '../../components/SearchBar';
import {Navigation} from '../../constants/navigation';

import * as S from './styles';

export default function Home() {
  const [value, setValue] = useState('');

  const {navigate} = useNavigation();

  return (
    <S.Container>
      <SearchBar placeholder="Find an user" />
    </S.Container>
  );
}
