import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'; 
import EmptyMsg from '../Components/EmptyMsg'
import CourseInCart from '../Components/CourseInCart'
import globalstyle from '../Styles/globalstyle'
import { addPayement, removeCourseCart } from '../RTK/Slice/dataSlice';
import { useEffect } from 'react';

const Cart = () => {
  const {courses} = useSelector(state => state)
  const dispatch = useDispatch()
  
  const handleDelete = (item) => {
    dispatch(removeCourseCart(item))
    alert(`${item.title} supprimer du panier`)
  }
  const handlerPayment = (cart, total) => {
    dispatch(addPayement(cart, total))
    alert("Paiement effectué")
  }
  let cart = courses.cart
  useEffect(()=> {
    cart = courses.cart
  },[courses.cart])
  console.log(courses.payments);

  return (
    <View style={styles.cartContainer}>
      
      {cart.length > 0 ? (
        <View>
           <FlatList 
            data={courses.cart}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CourseInCart 
                title={item.title}
                price={item.price}
                onDelete={() => handleDelete(item)}
              />
            )}
          /> 
           <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: <Text style={styles.totalPriceText}>{courses.total.toFixed(2)} €</Text></Text>
          <TouchableOpacity onPress={()=> handlerPayment({cart: cart, total: courses.total})} style={{
            flexDirection: "row", 
            alignItems: 'center', 
            borderWidth: 1,
            borderColor: globalstyle.red,
            borderRadius: 10,
            padding: 5,
            backgroundColor: globalstyle.red
            }}>
          <Text style={styles.btnaddpayements}>Payer</Text><FontAwesome name="credit-card-alt" size={24} color={globalstyle.white} />
          </TouchableOpacity>
      </View>
        </View>
        
      ):(
        <EmptyMsg>
          Pannier vide..
        </EmptyMsg>
      )}
      
     

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  cartContainer:{
    margin: 20,
  },
  totalContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginTop: 20
  },
  totalText:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  totalPriceText:{
    color: globalstyle.green
  },
  btnaddpayements:{
    color: globalstyle.white,
    marginRight: 5
  }
})