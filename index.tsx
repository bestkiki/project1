import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, PixelRatio } from 'react-native';
import styles from './style';
import PrimaryButton from '@/components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const ChooseShop = () => {
  const navigation = useNavigation();
  const [userType, setUserType] = useState<string | null>(null);

  return (
    <View style={styles.mainView}>
      <ScrollView>	


            {/* -----------------*/}

      <Text style={styles.mainHeader}>
        문다현님의{'\n'}
        현재 매장은 2개
      </Text>
      <Text style={styles.mainText}>
        매장을 선택하고 입장해보세요
      </Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[styles.button, userType === 'customer' ? styles.activatedBtn : {}]}
          onPress={() => setUserType('customer')}>
          <Image style={styles.customerIcon} source={require('@/assets/imgs/shop/market_icon.png')} />
          <Text style={[styles.buttonHeader, userType === 'customer' ? styles.activatedText : {}]}>새로운 매장 등록하기</Text>
          
        </TouchableOpacity>
        <View style={styles.gap} />
        <TouchableOpacity
          style={[styles.button, userType === 'artist' ? styles.activatedBtn : {}]}
          onPress={() => setUserType('artist')}>
          <Image style={styles.customerIcon} source={require('@/assets/imgs/shop/small_icon.webp')} />
          <Text style={[styles.buttonHeader, userType === 'artist' ? styles.activatedText : {}]}>마이브로우로 입장하기</Text>
         
        </TouchableOpacity>
      </View>

            {/* -----------------*/}



 

             

            <Text>{"\n"}</Text>



      <PrimaryButton onPress={() => navigation.navigate('MakeShop')} text={'확인'} />
      </ScrollView>
    </View>
  );
};

export default ChooseShop;
