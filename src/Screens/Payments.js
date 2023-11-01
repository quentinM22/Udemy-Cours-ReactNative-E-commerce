import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import EmptyMsg from '../Components/EmptyMsg'
import PaidItems from '../Components/PaidItems'
const Payments = () => {
    const {payments} = useSelector(state => state.courses)
  return (
    <View>
    { payments.length === 0 ? (
        <EmptyMsg>
            Aucun achat effectué
        </EmptyMsg>
    ):(
        <FlatList 
            data={payments}
            keyExtractor={item => item.id}
            renderItem={({item})=>
            <PaidItems 
                paymentDetails={item}
            />
        }
        />
    )}
    </View>
  )
}

export default Payments

const styles = StyleSheet.create({})