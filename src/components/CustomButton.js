import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';

export default function CustomButton({ label, onPress }) {
    return (
        <LinearGradient
            colors={['#53E88B', '#15BE77', '#15BE77']}
            style={{ padding: 20, borderRadius: 10, marginBottom: 30 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <TouchableOpacity onPress={onPress}>
                {typeof label == 'string' ? (<Text style={{ color: 'white', textAlign: 'center', fontWeight: '700', fontSize: 16 }}>{label}</Text>) : label}
            </TouchableOpacity>
        </LinearGradient>
    )
}