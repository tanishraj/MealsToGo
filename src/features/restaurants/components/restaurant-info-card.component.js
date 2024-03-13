import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Card, Text } from "react-native-paper";
import star from "../../../../assets/star";
import openIcon from "../../../../assets/open-icon";
import closeIcon from "../../../../assets/close-icon";
import dinerIcon from "../../../../assets/diner-icon";
import { Image } from "react-native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const CardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled.View``;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.secondary};
`;

const Ratings = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    restaurantId = "1",
    name = "Kha Lo Friends",
    address = "123, Gaighat Ballia",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://static.actu.fr/uploads/2022/04/abendbrot-939435.jpg"],
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <CardContent>
        <Info>
          <Section>
            <Title>{name}</Title>
            <SectionEnd>
              {isOpenNow && <SvgXml xml={openIcon} width={30} height={30} />}
              {isClosedTemporarily && (
                <SvgXml xml={closeIcon} width={30} height={30} />
              )}
            </SectionEnd>
          </Section>

          <Ratings>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Ratings>

          <Section>
            <Address>{address}</Address>
            <SectionEnd>
              <SvgXml xml={dinerIcon} width={30} height={30} />
            </SectionEnd>
          </Section>
        </Info>
      </CardContent>
    </RestaurantCard>
  );
};
