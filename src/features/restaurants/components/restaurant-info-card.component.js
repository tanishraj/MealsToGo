import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    restaurantId = "1",
    name = "Kha Lo Friends",
    address = "123, Gaighat Ballia",
    photos = "https://static.actu.fr/uploads/2022/04/abendbrot-939435.jpg",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <Title>Card title</Title>
      </Card.Content>
    </RestaurantCard>
  );
};
