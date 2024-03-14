import React from "react";
import { SvgXml } from "react-native-svg";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import openIcon from "../../../../assets/open-icon";
import closeIcon from "../../../../assets/close-icon";
import dinerIcon from "../../../../assets/diner-icon";

import {
  RestaurantCard,
  RestaurantCardCover,
  CardContent,
  Info,
  Section,
  SectionEnd,
  Ratings,
  Address,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    restaurantId = "1",
    name = "Kha Lo Friends",
    address = "123, Gaighat Ballia",
    icon = dinerIcon,
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
            <Text variant="label">{name}</Text>
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
              <SvgXml xml={icon} width={30} height={30} />
            </SectionEnd>
          </Section>
        </Info>
      </CardContent>
    </RestaurantCard>
  );
};
