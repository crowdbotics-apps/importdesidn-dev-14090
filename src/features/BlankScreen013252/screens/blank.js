import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_3: "",
    DateTimePicker_5: new Date(""),
    TextInput_7: "",
    Switch_12: true,
    CheckBox_96: true,
    CheckBox_104: true
  }

  render = () => (
    <View>
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_5}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_5: selectedDate })
        }
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <Image />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        value={this.state.Switch_12}
        onValueChange={nextChecked => this.setState({ Switch_12: nextChecked })}
      />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <View style={styles.View_28}>
        <View />
        <View />
      </View>
      <View />
      <View>
        <View />
        <View />
      </View>
      <Image />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_96}
        onPress={nextChecked => this.setState({ CheckBox_96: nextChecked })}
      />
      <Icon name="star" />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_104}
        onPress={nextChecked => this.setState({ CheckBox_104: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  TextInput_3: {},
  DateTimePicker_5: {},
  TextInput_7: {},
  Image_9: {},
  Switch_12: {},
  Slider_15: {},
  Slider_18: {},
  View_28: { flexDirection: "row" },
  View_29: {},
  View_30: {},
  View_49: {},
  View_59: {},
  View_60: {},
  View_61: {},
  Image_84: {},
  CheckBox_96: {},
  Icon_101: {},
  CheckBox_104: {}
})
