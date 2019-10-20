import geo from './geoCatalog';
import epiData from '../../epi.json'

const mapper = {};
const countries = [];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

geo.Continents.forEach((continent) => {
  continent.Countries.forEach((country) => {
    countries.push(country.Name);
    mapper[country.Name] = {
      name: country.Name,
      locations: shuffle(country.Cities.map((city) => city.Location.split(", ").map(s=>parseFloat(s)).reverse())),
      epi: epiData[country.Name]
    }
  })
})

export default mapper;
export {countries};

