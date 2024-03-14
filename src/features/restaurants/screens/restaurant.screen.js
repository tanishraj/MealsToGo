import React from "react";
import { FlatList } from "react-native";
import { SafeArea, SearchContainer } from "./restaurant.styles";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <FlatList
        data={data}
        renderItem={({ item }) => <RestaurantInfoCard />}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
