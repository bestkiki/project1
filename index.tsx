import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import styles from './style';
import PrimaryButton from '@/components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import { AVAILABLE_TAGS } from '@/screens/MakeShop/constants';
import { AVAILABLE_TAGS2 } from '@/screens/MakeShop/constants2';

import { useForm, Controller } from 'react-hook-form';
import Theme from '@/theme';


const MakeShop = () => {
  const { control, register, watch } = useForm();
  const navigation = useNavigation();
  const [userType, setUserType] = useState<string | null>(null);
  const [pickerValue, setPickerValue] = useState('1');

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  {
    /* modal 
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
 modal */
  }

  {
    /* modal2  */
  }

  const [modalVisible, setModalVisible] = useState(false);
  {
    /* modal2  */
  }

  const handleChangeTag = (onChange: any, value: Set<string>, pendingValue: string) => {
    let newValue = value;

    if (newValue.has(pendingValue)) {
      newValue.delete(pendingValue);
      onChange(newValue);
    } else {
      newValue.add(pendingValue);
      onChange(newValue);
    }
  };




  return (
    
    <View style={styles.container}>
      <ScrollView>
        {/* --------카메라 부분---------*/}

        <View>
          <ImageBackground
            style={styles.camerauploadbackground}
            source={require('@/assets/imgs/shop/camerauploadbackground.png')}
            resizeMode="cover">
            <View>
              <Image style={styles.profile} source={require('@/assets/imgs/shop/small_icon.png')} />
            </View>
            <View>
              <Image style={styles.cameraicon} source={require('@/assets/imgs/shop/camera_icon.png')} />
            </View>
            <View>
              <Image style={styles.cameraicon2} source={require('@/assets/imgs/shop/camera_icon.png')} />
            </View>
          </ImageBackground>
        </View>

        <Text>{'\n'}</Text>

        {/* ---------매장명 부터 소개까지 ---------*/}

        <Text style={styles.mainText}>매장명(아티스트명)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            this.setState({ inputText: text });
          }}
          placeholder="매장명을 입력해주세요."
        />

        <Text style={styles.mainText}>인스타그램(선택사항)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            this.setState({ inputText: text });
          }}
          placeholder="http://instagram.com"
        />

        <Text style={styles.mainText}>위치</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            this.setState({ inputText: text });
          }}
          placeholder="지번,도로명,건물명 검색"
        />

        <Text style={styles.mainText}>소개</Text>
        <TextInput
          style={styles.textInput2}
          onChangeText={text => {
            this.setState({ inputText: text });
          }}
          placeholder="매장과 아티스트님에 대해 소개해 주세요:)"
        />

        <Text>{'\n'}</Text>

        <Image style={styles.line} source={require('@/assets/imgs/shop/line.png')} />

        {/* ---------운영시간 -------- */}

        <Text style={styles.mainText}>운영시간</Text>

        <TouchableOpacity style={styles.acttime}>
          <Text style={styles.text}> 평일(월~금) </Text>
          <TextInput
            style={styles.textInput3}
            onChangeText={text => {
              this.setState({ inputText: text });
            }}
            placeholder="         00:00     ~      00:00         "
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.acttime}>
          <Text style={styles.text}> 주말 </Text>
          <TextInput
            style={styles.textInput3}
            onChangeText={text => {
              this.setState({ inputText: text });
            }}
            placeholder="         00:00     ~      00:00         "
          />
        </TouchableOpacity>

        <Image style={styles.line} source={require('@/assets/imgs/shop/line.png')} />

        {/* --------휴무일---------*/}

        <Text style={styles.mainText}>휴무일</Text>


        

   
   {/* ----------- */}
   <TouchableOpacity style={styles.acttime2}>

        <View>
         {/*  <View style={styles.headerWrapper}>
            <Text style={[styles.formTitle, styles.noMargin]}>관심 시술</Text>
            <Text style={styles.formSubTitle}>(중복 선택)</Text>
          </View>
          -*/}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            defaultValue={new Set()}
            render={({ field: { onChange, value } }) => (
              <View style={styles.tagWrapper2}>
                {AVAILABLE_TAGS2.map(item => (
                  <TouchableOpacity
                    onPress={() => handleChangeTag(onChange, value, item.value)}
                    style={[styles.genderBtn2, styles.tag, value.has(item.value) ? styles.activatedBtn : {}]}>
                    <Text style={[styles.genderText, value.has(item.value) ? styles.activatedText : {}]}>
                      {item.display}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            name="tags"
          />
        </View>

        </TouchableOpacity>
{/*-----------*/}






        <Text style={styles.mainText}>휴무일 단위</Text>

        {/* modal1 ---      
      <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text></Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
---*/}

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          presentationStyle="overCurrentContext"
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ height: '50%', backgroundColor: 'Black', bottom: 0 }}>
            <Text style={styles.text2}>휴무일 단위</Text>
            <Image style={styles.line2} source={require('@/assets/imgs/shop/line.png')} />


            <Picker selectedValue={pickerValue} onValueChange={item => setPickerValue(item)}>
              <Picker.Item label="매주" value="1" key="1" />
              <Picker.Item label="격주" value="2" key="2" />
              <Picker.Item label="매월 첫째주" value="3" key="3" />
              <Picker.Item label="매월 둘째주" value="4" key="4" />
              <Picker.Item label="매월 셋째주" value="5" key="5" />
              <Picker.Item label="매월 넷째주" value="6" key="6" />
            </Picker>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <PrimaryButton onPress={() => {
                setModalVisible(!modalVisible);
              }}  text={'확인'} />
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            setModalVisible(true);
          }}>
          <View style={styles.holidayLine}>
          <Text> 매주</Text>
          <Image style={styles.customerIcon} source={require('@/assets/imgs/shop/chevronright_icon.png')} />
          </View>
        </TouchableHighlight>
        

        <Image style={styles.line} source={require('@/assets/imgs/shop/line.png')} />

        <Text>{'\n'}</Text>

        {/* --------부가정보---------*/}

        <Text style={styles.mainText}>부가정보</Text>

        <TouchableOpacity style={styles.acttime2}>

        <View>
         {/*  <View style={styles.headerWrapper}>
            <Text style={[styles.formTitle, styles.noMargin]}>관심 시술</Text>
            <Text style={styles.formSubTitle}>(중복 선택)</Text>
          </View>
          -*/}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            defaultValue={new Set()}
            render={({ field: { onChange, value } }) => (
              <View style={styles.tagWrapper}>
                {AVAILABLE_TAGS.map(item => (
                  <TouchableOpacity
                    onPress={() => handleChangeTag(onChange, value, item.value)}
                    style={[styles.genderBtn, styles.tag, value.has(item.value) ? styles.activatedBtn : {}]}>
                    <Text style={[styles.genderText, value.has(item.value) ? styles.activatedText : {}]}>
                      {item.display}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            name="tags"
          />
        </View>

        </TouchableOpacity>



        <Image style={styles.line} source={require('@/assets/imgs/shop/line.png')} />

        <Text>{'\n'}</Text>

        <PrimaryButton onPress={() => navigation.navigate('ChooseShop')} text={'확인'} />
        
      </ScrollView>
      </View>
    

  );
};

export default MakeShop;
