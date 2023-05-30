import countries from "world-countries"

const banglore = [
  {
    flag: "IN",
    label: "Indiranagar",
    latlng: [12.9784, 77.6408],
    region: "Bengaluru",
    value: "0",
  },
  {
    flag: "IN",
    label: "MG Road/ Koramangala",
    latlng: [12.9352, 77.6245],
    region: "Bengaluru",
    value: "1",
  },
  {
    flag: "IN",
    label: "Jayanagar",
    latlng: [12.9308, 77.5838],
    region: "Bengaluru",
    value: "2",
  },
  {
    flag: "IN",
    label: "JP Nagar",
    latlng: [12.9063, 77.5857],
    region: "Bengaluru",
    value: "3",
  },
  {
    flag: "IN",
    label: "HSR/Bommanahalli",
    latlng: [12.9121, 77.6446],
    region: "Bengaluru",
    value: "4",
  },
  {
    flag: "IN",
    label: "Nagarbhavi",
    latlng: [12.9719, 77.5127],
    region: "Bengaluru",
    value: "5",
  },
  {
    flag: "IN",
    label: "Rajajinagar",
    latlng: [12.9982, 77.553],
    region: "Bengaluru",
    value: "6",
  },
  {
    flag: "IN",
    label: "Thanisandra",
    latlng: [13.0559, 77.6325],
    region: "Bengaluru",
    value: "7",
  },
  {
    flag: "IN",
    label: "Hennur",
    latlng: [13.0359, 77.6431],
    region: "Bengaluru",
    value: "8",
  },
  {
    flag: "IN",
    label: "RT Nagar",
    latlng: [13.0247, 77.5948],
    region: "Bengaluru",
    value: "9",
  },
  {
    flag: "IN",
    label: "East Bangalore",
    latlng: [13.0014, 77.6182],
    region: "Bengaluru",
    value: "10",
  },
]

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}))

const useCountries = () => {
  const getAll = () => banglore

  const getByValue = (value: string) => {
    return banglore.find((item) => item.value === value)
  }

  return {
    getAll,
    getByValue,
  }
}

export default useCountries
