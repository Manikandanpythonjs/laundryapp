import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { MWH, SW, VH } from '@/utils/Responsive'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, decrementQuantity, increasedQuantity } from '@/hooks/Redux/CreateItemSlice'

export default function CardDressItems({ item, index, selectedCategory }) {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    return (
        <TouchableOpacity style={{ padding: 15, elevation: 5, borderRadius: 5, backgroundColor: Colors.LIGHTWHITE, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginBottom: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 10 }}>
                <View>
                    <Image style={{ width: SW(50), height: VH(50) }} source={item?.image} />

                </View>
                <View>
                    <Text style={styles.text}>{item?.name}</Text>

                    {
                        selectedCategory == "Wash + Fold" ? (
                            <Text style={styles.text}>Rs {item?.price}</Text>
                        ) : selectedCategory === "Wash + Iorn" ? (
                            <Text style={styles.text}>Rs {(item?.price + 15).toFixed(2)}</Text>

                        ) : selectedCategory === "Steam Iorn" ? (
                            <Text style={styles.text}>Rs {(item?.price + 22).toFixed(2)}</Text>

                        ) : selectedCategory === "Dry clean" ? (
                            <Text style={styles.text}>Rs {(item?.price + 20).toFixed(2)}</Text>

                        ) : null
                    }

                </View>
            </View>

            <View>
                {cart.some((c) => c.item?.id == item?.id) ? (
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 10 }}>
                        <TouchableOpacity onPress={() => {
                            dispatch(decrementQuantity(item))
                        }}>
                            <AntDesign name="minuscircleo" size={30} color="black" />
                        </TouchableOpacity>

                        <Text style={{ fontSize: MWH(20), fontFamily: "OpenSans-SemiBold", fontWeight: "700" }}>{cart.find((c) => c?.item?.id == item?.id)?.item?.quantity}</Text>

                        <TouchableOpacity onPress={() => {
                            dispatch(increasedQuantity(item))
                        }}>
                            <AntDesign name="pluscircleo" size={30} color="black" />

                        </TouchableOpacity>
                    </View>


                ) : (
                    <Ionicons onPress={() => {
                        dispatch(addtoCart({
                            item, category: selectedCategory
                        }))
                    }} name="add-circle-outline" size={35} color="black" />

                )}



            </View>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    text: {
        fontSize: MWH(15),

        fontFamily: "OpenSans-SemiBold",
        fontWeight: "700"
    }

})