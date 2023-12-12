import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  Text,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Phase from "./components/Phase";
import phasesData from "./data/phases.json";
import Button from "./components/Button";

const Stack = createStackNavigator();
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const App = () => {
  const [phases, setPhases] = useState(phasesData);

  const handleAddCard = (phaseId) => {
    const updatedPhases = phases.map((phase) => {
      if (phase.id === phaseId) {
        const newCard = {
          id: Math.random().toString(),
          title: "New Card Content",
          description: "add new description",
        };
        return {
          ...phase,
          cards: phase.cards ? [...phase.cards, newCard] : [newCard],
        };
      }
      return phase;
    });

    setPhases(updatedPhases);
  };

  const handleRemoveCard = (phaseId, cardIdToRemove) => {
    const updatedPhases = phases.map((phase) => {
      if (phase.id === phaseId) {
        const updatedCards = phase.cards.filter(
          (card) => card.id !== cardIdToRemove
        );
        return {
          ...phase,
          cards: updatedCards,
        };
      }
      return phase;
    });

    setPhases(updatedPhases);
  };

  return (
    <ImageBackground
      source={require("./assets/background.jpg")}
      style={styles.backgroundImage}
      resizeMode="stretch"
    >
      <Text style={styles.title}>MW - TODO</Text>
      <ScrollView horizontal style={styles.container}>
        {phases.map((phase) => (
          <Phase
            key={phase.id}
            phase={phase}
            onAddCard={handleAddCard}
            onRemoveCard={handleRemoveCard}
          />
        ))}
        <Button title={"+ Add phase"} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 48,
    marginBottom: 6,
  },
  container: {
    margin: 5,
    gap: 10,
    marginRight: 16,
  },
  backgroundImage: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
