import React from "react";

import { View, Image, Text } from "react-native";

import styles from './Card.style';

const Card = ({products}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: products.imgURL }} />
      <View style={styles.body}>
        <Text style={styles.title}>{products.title}</Text>
        <Text>{products.price}</Text>
        <Text style={styles.inStockText}>
          {products.inStock ? "" : "Stokta Yok"}
        </Text>
      </View>
    </View>
  );
};

export default Card;
