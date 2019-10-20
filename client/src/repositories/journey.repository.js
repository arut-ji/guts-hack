import {firestore} from '../config/firebase.init';
import axios from 'axios';

const journeyColllection = 'journeys';
const headers = {
  'api-key': 'skyscanner-guts2019'
}


export class JourneyRepository {

  static async fetch({id}) {
    return await firestore.collection(journeyColllection).doc(id)
      .get()
  }

  static async fetchAll() {
    return await firestore.collection(journeyColllection)
      .get()
      .then((querySnapshot) => querySnapshot.docs)
      .then((docs) => docs.map((doc) => {
        return {
          id: doc.id,
          data: doc.data()
        }
      }))
  }

  static async fetchFeatured() {
    const result = await firestore.collection(journeyColllection)
      .limit(3)
      .get()
      .then((querySnapshot) => querySnapshot.docs)
      .then((docs) => docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }));
    return result;
  }

  static async fetchByLocation({location}) {
    return await firestore.collection(journeyColllection)
      .where('location', '==', location)
      .get()
      .then((querySnapshot) => querySnapshot.docs)
      .then((docs) => docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }))
  }

  static fetchAverageEmission({origin, destination}) {
    // const result = await axios.get(`https://www.skyscanner.net/g/chiron/api/v1/eco/average-emissions?routes="{${origin}, ${destination}}"`);
    console.log(Math.random() * 10000)

    const result = {
      "originId" : 15083,
      "originCode" : "ORY",
      "destinationId" : 11235,
      "destinationCode" : "EDI",
      "emissions" : `${(Math.random() * 10000).toFixed(3)}`,
      "routeCodeId" : "ORY,EDI",
      "routeId" : "15083,11235"
    }

    return result;
  }

  static save() {
  }

  static update() {
  }

};
