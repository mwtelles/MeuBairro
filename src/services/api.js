import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
  baseURL: "https://trueway-geocoding.p.rapidapi.com",
  headers: {
    'X-RapidAPI-Key': '7526ae447fmsha0d84971429b2f7p13bff1jsn02644667261c',
    'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
  },
});

const apiFront = axios.create({
  baseURL: "https://tcc-meu-bairro.herokuapp.com",
});


export const updateUserImage = async (userId, image) => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    const email = await AsyncStorage.getItem('userEmail');
    const response = await apiFront.put(`/app/update-user/${userId}`, {
      photo_url: image,
    }, {
      headers: {
        'token': token,
        'email': email,
        'session': '',
      }
    })
    return response.data;

  } catch (e) {
    console.log(e);
  }
};

export const getAllNotifications = async () => {

  try {

    const token = await AsyncStorage.getItem('userToken');
    const email = await AsyncStorage.getItem('userEmail');
    const response = await apiFront.get('/app/notifications', {
      headers: {
        'token': token,
        'email': email,
        'session': '',
      }
    })
    return response.data.result.notifications;

  }catch (e) {
    console.log(e);
  }

};