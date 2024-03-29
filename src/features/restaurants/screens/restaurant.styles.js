import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;
