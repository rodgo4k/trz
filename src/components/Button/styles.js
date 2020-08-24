import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Button = styled(LinearGradient)`
    background: #fff;
    margin-top: 5px;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text`
    font-size: 12px;
`;