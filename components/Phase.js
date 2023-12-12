import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Card from "./Card";
import { Button as RnButton } from "react-native";
import { TouchableOpacity } from "react-native";

const Phase = ({ phase, onAddCard, onRemoveCard }) => {
  const handleAddCard = () => {
    onAddCard(phase.id);
  };
  const handleRemoveCard = (cardId) => {
    onRemoveCard(phase.id, cardId);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{phase.title}</Text>
          <RnButton title="..." color={"#fff"} />
        </View>

        <ScrollView>
          {phase.cards?.map((card) => (
            <Card key={card.id} card={card} onRemoveCard={handleRemoveCard} />
          ))}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={handleAddCard} style={styles.addButton}>
              <Text style={styles.ButtonText}>+ Add card</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 300,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  option: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  ButtonText: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 5,
  },
});

export default Phase;
