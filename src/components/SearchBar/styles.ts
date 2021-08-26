import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  margin-bottom: 8px;
  padding: 8px 16px;
  border: 1px solid #f4511e;
  border-radius: 8px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity<
  Pick<{firstChild?: boolean}, 'firstChild'>
>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: #f4511e;
  border-radius: 8px;
  margin-left: ${({firstChild}) => (firstChild ? '0' : '8px')};
`;

export const Text = styled.Text`
  color: #fff;
`;
