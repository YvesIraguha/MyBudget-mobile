import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import expenseAvatar from '../../../assets/expense.jpeg';
import {
  capitalizeString,
  convertToHours,
  convertStatusToIcon
} from '../../../helpers/utils';

export default ({ item, navigation }) => {
  const { name, initialAmount, createdAt: time, pictureUrl, status } = item;
  const statusIcon = convertStatusToIcon(status);
  return (
    <View style={[styles.container, styles.expenseContainer]}>
      <View style={styles.expenseAvatarContainer}>
        <Image
          source={pictureUrl ? { uri: pictureUrl } : expenseAvatar}
          resizeMode="cover"
          style={styles.expenseAvatar}
        />
      </View>
      <View style={styles.data}>
        <View style={styles.description}>
          <Text style={styles.title}>{capitalizeString(name)}</Text>
          <Text style={styles.price}>{initialAmount} RWF</Text>
        </View>
        <View style={styles.left}>
          <Text style={styles.time}>{convertToHours(time)}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}
          >
            <AntDesign
              name={statusIcon.name}
              size={25}
              color={statusIcon.color}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
