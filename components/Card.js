import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Draggable from "react-native-draggable";

const Card = ({ card, onRemoveCard }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);
  const [newDescription, setNewDescription] = useState(card.description);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    // Perform edit action here with newTitle and newDescription
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform save action with updated newTitle and newDescription
  };

  const handleRemove = () => {
    onRemoveCard(card.id);
  };

  return (
    <Draggable>
      <View style={styles.container}>
        {isEditing ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={newTitle}
              onChangeText={(text) => setNewTitle(text)}
              placeholder="New Title"
            />
            <TextInput
              style={styles.input}
              value={newDescription}
              onChangeText={(text) => setNewDescription(text)}
              placeholder="New Description"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text>Edit</Text>
          </TouchableOpacity>
        )}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.title}>{newTitle}</Text>
            <Text style={styles.description}>{newDescription}</Text>
          </View>
          <TouchableOpacity style={{ marginTop: 18 }} onPress={handleRemove}>
            <Text style={{ color: "red" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Draggable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 12,
  },
  editButton: {
    alignSelf: "flex-end",

    padding: 3,
    backgroundColor: "lightblue",
    borderRadius: 3,
  },
  inputContainer: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "lightblue",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
});

export default Card;
