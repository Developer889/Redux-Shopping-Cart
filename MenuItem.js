import * as React from 'react';
import { Text, View, StyleSheet,Pressable,Image } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty, incrementQty,incrementPrice } from "./CartReducer";
import { decrementQuantity, incrementQuantity } from "./ProductReducer";

export default function MenuItem({item}) {
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item)); // cart array being used
    dispatch(incrementQuantity(item)); // product array being used
    // dispatch(incrementPrice(item));
  };
  const cart = useSelector((state) => state.cart.cart);
  return (
    <View style={{marginTop:40}}>
      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 10 }}>
            {item.name} - Rs 
            {item.price}
          </Text>
          <Image
            source={{ uri: item.image }}
            style={{ width: 80, height: 80, borderRadius: 10 }}
          />
        </View>
        {cart.some((value) => value.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FF3366",
              borderRadius: 5,
              width: 120,
            }}
          >
            <Pressable
              onPress={() => {
                dispatch(decrementQty(item));
                dispatch(decrementQuantity(item));
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                {item.quantity}
              </Text>
            </Pressable>

            <Pressable
             onPress={() => {
              dispatch(incrementQty(item)); // cart
              dispatch(incrementQuantity(item)); //product
            }}
             
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        ):
        ( <Pressable onPress={() => addItemToCart(item)}>
        <Text style={{borderColor:'gray',borderWidth:1,marginVertical:10,padding:5}}>
          Add to Cart
        </Text>
        </Pressable>)
        }
       
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
