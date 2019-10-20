import {JourneyRepository} from '../repositories/journey.repository'

export class JourneyService {
  static async fetchAll() {
    return await JourneyRepository.fetchAll();
  }

  static async fetchFeatured() {
    return await JourneyRepository.fetchFeatured()
  }

  static async fetchByLocation({location}) {
    const result = await JourneyRepository.fetchByLocation({location});
    return {
      country: location,
      journeyList: result.map((journey) => {
        return {
          name: journey.title,
          ecoIndex: 50,
          price: journey.journeyPrice,
          img: journey.imgUrl
        }
      })
    }
  }

}
