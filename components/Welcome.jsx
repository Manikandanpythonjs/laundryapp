import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { MWH, VH } from '@/utils/Responsive'
import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'

export default function Welcome() {


    const navigation = useNavigation()

    useEffect(() => {


        navigation.setOptions({

            headerShown: false
        })
    }, [])

    return (

        <View style={{ backgroundColor: "white", flex: 1, alignContent: "center", justifyContent: "center" }} >
            <Image
                resizeMode='cover'
                style={{ width: "100%", height: VH(420) }}
                source={require("../assets/images/laundrylogo.jpg")} />

            <View style={{ backgroundColor: Colors.WHITE, borderTopRightRadius: 25, borderTopLeftRadius: 25 }} >

                <View style={{ paddingHorizontal: MWH(10), marginTop: 10 }}>

                    <Text style={{ textAlign: "center", lineHeight: VH(25), fontSize: MWH(18), fontWeight: "600", fontFamily: "OpenSans-CSemiBold" }}>
                        Experience hassle-free laundry with our app! Effortlessly schedule pickups, track orders, and enjoy freshly cleaned clothes delivered to your door.
                    </Text>

                    <TouchableOpacity style={{ width: "100%", marginTop: MWH(30), backgroundColor: "dodgerblue", paddingHorizontal: 10, paddingVertical: 20, borderRadius: 5 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: MWH(16), fontWeight: "700" }}>Get Started Today</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}