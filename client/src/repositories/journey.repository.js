import {firestore} from '../config/firebase.init';

const journeyColllection = 'journeys';

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
      .where('location','==', location)
      .get()
      .then((querySnapshot) => querySnapshot.docs)
      .then((docs) => docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }))
  }

  static save() {
  }

  static update() {
  }

};
