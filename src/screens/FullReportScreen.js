import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

import logoUrl from '../assets/images/examples/logo-meubairro.png'

import { imageLogo } from '../images';

import CustomButton from '../components/CustomButton';
import ImageGallery from '../components/ImageGallery';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { printToFileAsync } from 'expo-print';

import { shareAsync } from 'expo-sharing';

import FlatListHorizontal from "../components/FlatListHorizontal";

import { useNavigation, useRoute } from '@react-navigation/native';


import { getNotificationsById, api } from "../services/api";

const FullReportScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const { data } = route.params;

    const [address, setAddress] = useState({});
    const [report, setReport] = useState([]);
    const [loading, setLoading] = useState(true);
    const [generateReport, setGenerateReport] = useState(false);


    const handleGenerateReportView = async () => {

        setGenerateReport(true);


        const html = `
        <!DOCTYPE html>
        <html lang="pt-br">
        
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>

            <body>

            <style>
                * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                }

                .header {
                background-color: #15BE77;
                color: #fff;
                padding: 40px;
                height: 160px;
                text-align: center;
                position: relative;
                }

                .image-logo {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                position: absolute;
                bottom: -65px;
                left: 50%;
                transform: translateX(-50%);
                }

                .image-logo>img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
                }

                .body {
                width: 800px;
                margin: auto;
                margin-top: 100px;
                }

                .tipo-relatorio {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
                }

                .type {
                font-size: 15px;
                font-weight: 600;
                border-radius: 50px;
                padding: 5px;
                background: rgba(21, 190, 119, 0.5);
                }

                .descricao-relatorio {
                font-size: 15px;
                font-weight: bold;
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;
                }

                .endereco-relatorio {
                font-size: 15px;
                font-weight: bold;
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;
                }

                .endereco {
                font-size: 25px;
                font-weight: 600;
                color: gray;
                padding: 5px;
                }

                .image-relatorio {
                font-size: 15px;
                font-weight: bold;
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;
                }

                .images-relatorio {
                margin-top: 10px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 10px;

                }

                .images-relatorio>img {
                width: 100%;
                height: 250px;
                object-fit: cover;
                }

            </style>

            <div class="header">
                <h1>Relatorio de Ocorrencia</h1>
                <div class="image-logo">
                    <img src="https://firebasestorage.googleapis.com/v0/b/uploadimagemeubairro.appspot.com/o/logo-meubairro.png?alt=media&token=9be13b7a-3764-46f5-b6ef-9a1fd0ceec35" alt="Logo">
                </div>
            </div>
            <div class="body">
                <div class="tipo-relatorio">
                <span>Tipo de Relato: </span>
                <span class="type">
                    ${report.notification.type}
                </span>
                </div>
                <div class="descricao-relatorio">
                <span>Descrição: </span>
                <span>
                    ${report.notification.description}
                </span>
                </div>
                <div class="endereco-relatorio">
                <span>Endereco: </span>
                <span class="endereco">
                    ${`${address.street}, ${address.sublocality} - ${address.area}/${address.region}`}
                </span>
                </div>
                <div class="image-relatorio">
                <span>Images da Ocorrencia: </span>
                <div class="images-relatorio">
                    ${report.images.map((image) => {
            return (
                `<img src="${image.url}" alt="Image" />`
            )
        }).join('')}
                </div>
                </div>
            </div>


            </body>

        </html>
        `;
        const file = await printToFileAsync({ html, base64: false });
        await shareAsync(file.uri);
        setGenerateReport(false);
        alert('Relatorio Gerado com Sucesso!');

    }


    useEffect(() => {
        (async () => {
            try {
                const getAddress = await api.get("/ReverseGeocode", {
                    params: { location: `${data.location.latitude}, ${data.location.longitude}` },
                });
                const dataAddress = getAddress.data.results;
                let newAddress = dataAddress.find(
                    (item) => item.location_type === "centroid" && item.type === "route"
                );
                setAddress(newAddress);
                const getNotification = await getNotificationsById(data.id)
                setReport(getNotification)
                setLoading(false)

            } catch (err) {
                console.log(err);
            }
        })();
    }, [])

    return (
        <ScrollView>
            {!loading ? (
                <>
                    <View>
                        <LinearGradient
                            colors={['#53E88B', '#15BE77', '#15BE77']}
                            style={{ paddingVertical: 50 }}>
                            <View style={{ backgroundColor: '#53E88B', width: '15%', padding: 14, marginLeft: 20, borderRadius: 10, opacity: 0.8 }}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <MaterialCommunityIcons name="chevron-left" size={30} color="white" />
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 20 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                            <View style={{ backgroundColor: 'rgba(83, 232, 139, 0.6)', borderRadius: 100, marginBottom: 12, marginTop: 2, paddingVertical: 5, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 14, color: 'black', fontFamily: 'Inter-Medium' }}>{report.notification.type}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 24, color: 'black', fontFamily: 'Inter-Black', marginTop: 10, marginBottom: 10 }}>
                                {report.notification.title}
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={{ fontSize: 14, color: 'gray', fontFamily: 'Inter-Medium' }}>{`${address.street}, ${address.sublocality} - ${address.area}/${address.region}`}</Text>
                                </View>
                            </View>
                            <View style={{ maxWidth: '95%' }}>
                                <Text style={{ textAlign: 'justify', fontFamily: 'Roboto-Regular', fontSize: 13, lineHeight: 19 }}>
                                    {report.notification.description}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 14, color: 'black', fontFamily: 'Inter-Bold', marginTop: 10, marginBottom: 10 }}>
                                    Imagens
                                </Text>
                            </View>
                            <View>
                                <ImageGallery data={report.images} />
                            </View>
                            <View style={{ marginTop: 50 }}>
                                {generateReport ? (
                                    <ActivityIndicator size="large" color="#53E88B" />
                                ) : (
                                    <CustomButton label={'Gerar Relatorio'} onPress={handleGenerateReportView} />
                                )}
                            </View>
                        </View>

                    </View>
                </>
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#53E88B" />
                </View>
            )}
        </ScrollView>
    )
}

export default FullReportScreen