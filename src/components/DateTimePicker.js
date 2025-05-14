import React, { useState } from "react";
import { View, Button } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

const CustomDateTimePicker = ({ type, buttonTitle, dateKey, setValue }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (type === "date") {
      const hour = date.getHours();
      const minute = date.getMinutes();
      const formattedTime = `${hour}:${minute}`;
      setValue((prevState) => ({
        ...prevState,
        [dateKey]: formattedTime,
      }));
    } else {
      setValue((prevState) => ({
        ...prevState,
        [dateKey]: date,
      }));
    }
    hideDatePicker();
  };

  return (
    <View>
      <Button title={buttonTitle} onPress={showDatePicker} color="#000" />
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode={type}
        locale="pt_BR"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{ backgroundColor: "#000" }}
        textColor="#fff"
      />
    </View>
  );
};

export default CustomDateTimePicker;
