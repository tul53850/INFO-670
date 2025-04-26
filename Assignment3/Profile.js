import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Profile() {

    
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedUsername, setSelectedUsername] = useState('');

  return (
    <View style={styles.root}>
      <View style={styles.viewProfile}>
        <View style={styles.sectionTitle}>
          <View style={styles.text}>
            <Text style={styles.title4}>
              {`Profile`}
            </Text>
          </View>
        </View>
        <View style={styles.editUsername}>
          <Text style={styles.title5}>
            {`Username:`} {selectedUsername}
          </Text>
        </View>
        <View style={styles.editGender}>
          <Text style={styles.title6}>
            {`Gender:`} {selectedGender}
          </Text>
        </View>
        <View style={styles.editColor}>
          <Text style={styles.title7}>
            {`Favorite Color:`} {selectedColor}
          </Text>
        </View>
      </View>
      <View style={styles.editProfile}>
        <View style={styles.sectionTitle2}>
          <View style={styles.text2}>
            <Text style={styles.title8}>
              {`Edit Profile`}
            </Text>
          </View>
        </View>
        <View style={styles.editUsername2}>
          <Text style={styles.title9}>
            {`Username`}
          </Text>
          <TextInput 
            style={styles.textfield} 
            placeholder='Enter Username'
            value={selectedUsername}
            onChangeText={setSelectedUsername}
            >
          </TextInput>
          <Text style={styles.info}>
            {`Choose a unique username`}
          </Text>
        </View>
        <View style={styles.editGender2}>
          <Text style={styles.title10}>
            {`Gender`}
          </Text>
          <View style={styles.chipGroup}>
            <TouchableOpacity style={styles.chip} onPress={() => setSelectedGender('male')}>
              <Text style={styles.text4}>
                {`Male`}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip2} onPress={() => setSelectedGender('female')}>
              <Text style={styles.text5}>
                {`Female`}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip3} onPress={() => setSelectedGender('other')}>
              <Text style={styles.text6}>
                {`Other`}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.info2}>
            {`Select your gender`}
          </Text>
        </View>
        <View style={styles.editColor2}>
          <Text style={styles.title11}>
            {`Favorite Color`}
          </Text>
          <Picker
            selectedValue={selectedColor}
            onValueChange={(itemValue) => setSelectedColor(itemValue)}
            style={{ height: 50, width: 200 }}
          >
            <Picker.Item label="Choose a color..." value="" />
            <Picker.Item label="Red" value="red" />
            <Picker.Item label="Blue" value="blue" />
            <Picker.Item label="Green" value="green" />
            <Picker.Item label="Yellow" value="yellow" />
            <Picker.Item label="Purple" value="purple" />
          </Picker>
          <Text style={styles.info3}>
            {`Choose your favorite color from the dropdown above`}
          </Text>
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.text11}>
            {`Save`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 412,
    height: 917,
    paddingBottom: 12,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 12,
    columnGap: 12,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  title: {
    height: 14,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    width: 412,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.12156862765550613)',
    shadowRadius: 6,
    shadowOffset: {"width":0,"height":0},
  },
  tab: {
    paddingTop: 20,
    paddingLeft: 4,
    paddingBottom: 20,
    paddingRight: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  title2: {
    height: 14,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
  },
  tab2: {
    paddingTop: 20,
    paddingLeft: 4,
    paddingBottom: 20,
    paddingRight: 4,
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  title3: {
    height: 14,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
  },
  tab3: {
    paddingTop: 20,
    paddingLeft: 4,
    paddingBottom: 20,
    paddingRight: 4,
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  title4: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
  },
  viewProfile: {
    paddingTop: 0,
    paddingLeft: 12,
    paddingBottom: 25,
    paddingRight: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 8,
    columnGap: 8,
    alignSelf: 'stretch',
  },
  sectionTitle: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 0,
    paddingBottom: 30,
    paddingRight: 0,
    alignItems: 'center',
    rowGap: 12,
    columnGap: 12,
    alignSelf: 'stretch',
  },
  text: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  title5: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  editUsername: {
    paddingTop: 0,
    paddingLeft: 12,
    paddingBottom: 0,
    paddingRight: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 4,
    columnGap: 4,
    alignSelf: 'stretch',
  },
  title6: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  editGender: {
    paddingTop: 0,
    paddingLeft: 12,
    paddingBottom: 0,
    paddingRight: 12,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 4,
    columnGap: 4,
    alignSelf: 'stretch',
  },
  title7: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  editColor: {
    paddingTop: 0,
    paddingLeft: 12,
    paddingBottom: 0,
    paddingRight: 12,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 4,
    columnGap: 4,
    alignSelf: 'stretch',
  },
  title8: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
  },
  editProfile: {
    paddingTop: 0,
    paddingLeft: 12,
    paddingBottom: 0,
    paddingRight: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 8,
    columnGap: 8,
    alignSelf: 'stretch',
  },
  sectionTitle2: {
    flexDirection: 'row',
    paddingTop: 30,
    alignItems: 'center',
    rowGap: 12,
    columnGap: 12,
    alignSelf: 'stretch',
  },
  text2: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  title9: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  text3: {
    height: 20,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: 'hidden',
    color: 'rgba(0, 0, 0, 0.501960813999176)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  editUsername2: {
    paddingTop: 0,
    paddingLeft: 12,
    paddingBottom: 0,
    paddingRight: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 4,
    columnGap: 4,
    alignSelf: 'stretch',
  },
  textfield: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingLeft: 12,
    paddingBottom: 8,
    paddingRight: 12,
    alignItems: 'center',
    rowGap: 4,
    columnGap: 4,
    alignSelf: 'stretch',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.10196078568696976)',
  },
  info: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 0.501960813999176)',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
  },
  title10: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  text4: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  editGender2: {
    paddingTop: 0,
    paddingLeft: 12,
    paddingBottom: 0,
    paddingRight: 12,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 4,
    columnGap: 4,
    alignSelf: 'stretch',
  },
  chipGroup: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    rowGap: 8,
    columnGap: 8,
    alignSelf: 'stretch',
  },
  chip: {
    width: 64,
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.05098039284348488)',
  },
  text5: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  chip2: {
    width: 64,
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.05098039284348488)',
  },
  text6: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  chip3: {
    width: 64,
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.05098039284348488)',
  },
  info2: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 0.501960813999176)',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
  },
  title11: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  text7: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  editColor2: {
    paddingTop: 0,
    paddingLeft: 12,
    paddingBottom: 0,
    paddingRight: 12,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 4,
    columnGap: 4,
    alignSelf: 'stretch',
  },
  chipGroup2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    rowGap: 8,
    columnGap: 8,
    alignSelf: 'stretch',
  },
  chip4: {
    width: 64,
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.05098039284348488)',
  },
  text8: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  chip5: {
    width: 64,
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.05098039284348488)',
  },
  text9: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  chip6: {
    width: 64,
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.05098039284348488)',
  },
  text10: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  chip7: {
    width: 64,
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.05098039284348488)',
  },
  info3: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 0.501960813999176)',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
  },
  text11: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  saveButton: {
    width: 64,
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.05098039284348488)',
  },
});
