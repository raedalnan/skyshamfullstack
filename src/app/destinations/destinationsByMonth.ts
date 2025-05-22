interface Destination {
  name: string;
  image: string;
  teaser: string;
  details: string;
}

type DestinationsByMonth = {
  [key: string]: Destination[];
}

export const destinationsByMonth: DestinationsByMonth = {
  January: [
    {
      name: "Amalfi Coast",
      image: "https://source.unsplash.com/featured/800x600/?Amalfi%20Coast",
      teaser: "Mediterranean charm before peak season",
      details: "Discover Amalfi Coast in Italy – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Bhutan",
      image: "https://source.unsplash.com/featured/800x600/?Bhutan",
      teaser: "Himalayan trekking and culture",
      details: "Discover Bhutan in Bhutan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Cape Town",
      image: "https://source.unsplash.com/featured/800x600/?Cape%20Town",
      teaser: "Sun-soaked coastal beauty",
      details: "Discover Cape Town in South Africa – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Edinburgh",
      image: "https://source.unsplash.com/featured/800x600/?Edinburgh",
      teaser: "Festival season and historic charm",
      details: "Discover Edinburgh in Scotland – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Kyoto",
      image: "https://source.unsplash.com/featured/800x600/?Kyoto",
      teaser: "Traditional temples and late cherry blossoms",
      details: "Discover Kyoto in Japan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Maldives",
      image: "https://source.unsplash.com/featured/800x600/?Maldives",
      teaser: "Overwater villas and coral reefs",
      details: "Discover Maldives in Maldives – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Norwegian Fjords",
      image: "https://source.unsplash.com/featured/800x600/?Norwegian%20Fjords",
      teaser: "Dramatic landscapes and cruises",
      details: "Discover Norwegian Fjords in Norway – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Rio de Janeiro",
      image: "https://source.unsplash.com/featured/800x600/?Rio%20de%20Janeiro",
      teaser: "Carnival celebrations and beach life",
      details: "Discover Rio de Janeiro in Brazil – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Tuscany",
      image: "https://source.unsplash.com/featured/800x600/?Tuscany",
      teaser: "Rolling hills and summer festivals",
      details: "Discover Tuscany in Italy – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ],
  February: [
    {
      name: "Amalfi Coast",
      image: "https://source.unsplash.com/featured/800x600/?Amalfi%20Coast",
      teaser: "Mediterranean charm before peak season",
      details: "Discover Amalfi Coast in Italy – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Bhutan",
      image: "https://source.unsplash.com/featured/800x600/?Bhutan",
      teaser: "Himalayan trekking and culture",
      details: "Discover Bhutan in Bhutan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Cape Town",
      image: "https://source.unsplash.com/featured/800x600/?Cape%20Town",
      teaser: "Sun-soaked coastal beauty",
      details: "Discover Cape Town in South Africa – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Edinburgh",
      image: "https://source.unsplash.com/featured/800x600/?Edinburgh",
      teaser: "Festival season and historic charm",
      details: "Discover Edinburgh in Scotland – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Kyoto",
      image: "https://source.unsplash.com/featured/800x600/?Kyoto",
      teaser: "Traditional temples and late cherry blossoms",
      details: "Discover Kyoto in Japan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Marrakech",
      image: "https://source.unsplash.com/featured/800x600/?Marrakech",
      teaser: "Spring weather and cultural wonders",
      details: "Discover Marrakech in Morocco – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Norwegian Fjords",
      image: "https://source.unsplash.com/featured/800x600/?Norwegian%20Fjords",
      teaser: "Dramatic landscapes and cruises",
      details: "Discover Norwegian Fjords in Norway – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Santorini",
      image: "https://source.unsplash.com/featured/800x600/?Santorini",
      teaser: "Island paradise and cliff views",
      details: "Discover Santorini in Greece – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Venice",
      image: "https://source.unsplash.com/featured/800x600/?Venice",
      teaser: "Romantic canals and carnival festivities",
      details: "Discover Venice in Italy – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ],
  March: [
    {
      name: "Amalfi Coast",
      image: "https://source.unsplash.com/featured/800x600/?Amalfi%20Coast",
      teaser: "Mediterranean charm before peak season",
      details: "Discover Amalfi Coast in Italy – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Bhutan",
      image: "https://source.unsplash.com/featured/800x600/?Bhutan",
      teaser: "Himalayan trekking and culture",
      details: "Discover Bhutan in Bhutan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Cape Town",
      image: "https://source.unsplash.com/featured/800x600/?Cape%20Town",
      teaser: "Sun-soaked coastal beauty",
      details: "Discover Cape Town in South Africa – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Great Barrier Reef",
      image: "https://source.unsplash.com/featured/800x600/?Great%20Barrier%20Reef",
      teaser: "Diving and marine wonders",
      details: "Discover Great Barrier Reef in Australia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Kyoto",
      image: "https://source.unsplash.com/featured/800x600/?Kyoto",
      teaser: "Traditional temples and late cherry blossoms",
      details: "Discover Kyoto in Japan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Marrakech",
      image: "https://source.unsplash.com/featured/800x600/?Marrakech",
      teaser: "Spring weather and cultural wonders",
      details: "Discover Marrakech in Morocco – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Norwegian Fjords",
      image: "https://source.unsplash.com/featured/800x600/?Norwegian%20Fjords",
      teaser: "Dramatic landscapes and cruises",
      details: "Discover Norwegian Fjords in Norway – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Santorini",
      image: "https://source.unsplash.com/featured/800x600/?Santorini",
      teaser: "Island paradise and cliff views",
      details: "Discover Santorini in Greece – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Venice",
      image: "https://source.unsplash.com/featured/800x600/?Venice",
      teaser: "Romantic canals and carnival festivities",
      details: "Discover Venice in Italy – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ],
  April: [
    {
      name: "Bali",
      image: "https://source.unsplash.com/featured/800x600/?Bali",
      teaser: "Tropical paradise with pristine beaches",
      details: "Discover Bali in Indonesia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Bora Bora",
      image: "https://source.unsplash.com/featured/800x600/?Bora%20Bora",
      teaser: "Overwater bungalows and clear waters",
      details: "Discover Bora Bora in French Polynesia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Croatia",
      image: "https://source.unsplash.com/featured/800x600/?Croatia",
      teaser: "Coastal beauty and historic towns",
      details: "Discover Croatia in Croatia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Great Barrier Reef",
      image: "https://source.unsplash.com/featured/800x600/?Great%20Barrier%20Reef",
      teaser: "Diving and marine wonders",
      details: "Discover Great Barrier Reef in Australia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Kyoto",
      image: "https://source.unsplash.com/featured/800x600/?Kyoto",
      teaser: "Traditional temples and late cherry blossoms",
      details: "Discover Kyoto in Japan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "New England",
      image: "https://source.unsplash.com/featured/800x600/?New%20England",
      teaser: "Fall foliage and coastal charm",
      details: "Discover New England in USA – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Paris",
      image: "https://source.unsplash.com/featured/800x600/?Paris",
      teaser: "Spring blooms in the City of Light",
      details: "Discover Paris in France – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Santorini",
      image: "https://source.unsplash.com/featured/800x600/?Santorini",
      teaser: "Island paradise and cliff views",
      details: "Discover Santorini in Greece – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Venice",
      image: "https://source.unsplash.com/featured/800x600/?Venice",
      teaser: "Romantic canals and carnival festivities",
      details: "Discover Venice in Italy – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ],
  May: [
    {
      name: "Bali",
      image: "https://source.unsplash.com/featured/800x600/?Bali",
      teaser: "Tropical paradise with pristine beaches",
      details: "Discover Bali in Indonesia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Bora Bora",
      image: "https://source.unsplash.com/featured/800x600/?Bora%20Bora",
      teaser: "Overwater bungalows and clear waters",
      details: "Discover Bora Bora in French Polynesia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Croatia",
      image: "https://source.unsplash.com/featured/800x600/?Croatia",
      teaser: "Coastal beauty and historic towns",
      details: "Discover Croatia in Croatia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Great Barrier Reef",
      image: "https://source.unsplash.com/featured/800x600/?Great%20Barrier%20Reef",
      teaser: "Diving and marine wonders",
      details: "Discover Great Barrier Reef in Australia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Lapland",
      image: "https://source.unsplash.com/featured/800x600/?Lapland",
      teaser: "Northern lights and Santa’s village",
      details: "Discover Lapland in Finland – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "New England",
      image: "https://source.unsplash.com/featured/800x600/?New%20England",
      teaser: "Fall foliage and coastal charm",
      details: "Discover New England in USA – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Provence",
      image: "https://source.unsplash.com/featured/800x600/?Provence",
      teaser: "Lavender fields and wine tasting",
      details: "Discover Provence in France – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Santorini",
      image: "https://source.unsplash.com/featured/800x600/?Santorini",
      teaser: "Island paradise and cliff views",
      details: "Discover Santorini in Greece – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ],
  June: [
    {
      name: "Bali",
      image: "https://source.unsplash.com/featured/800x600/?Bali",
      teaser: "Tropical paradise with pristine beaches",
      details: "Discover Bali in Indonesia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Bora Bora",
      image: "https://source.unsplash.com/featured/800x600/?Bora%20Bora",
      teaser: "Overwater bungalows and clear waters",
      details: "Discover Bora Bora in French Polynesia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Croatia",
      image: "https://source.unsplash.com/featured/800x600/?Croatia",
      teaser: "Coastal beauty and historic towns",
      details: "Discover Croatia in Croatia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Greek Islands",
      image: "https://source.unsplash.com/featured/800x600/?Greek%20Islands",
      teaser: "Perfect May weather and island charm",
      details: "Discover Greek Islands in Greece – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Lapland",
      image: "https://source.unsplash.com/featured/800x600/?Lapland",
      teaser: "Northern lights and Santa’s village",
      details: "Discover Lapland in Finland – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "New England",
      image: "https://source.unsplash.com/featured/800x600/?New%20England",
      teaser: "Fall foliage and coastal charm",
      details: "Discover New England in USA – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Provence",
      image: "https://source.unsplash.com/featured/800x600/?Provence",
      teaser: "Lavender fields and wine tasting",
      details: "Discover Provence in France – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Swiss Alps",
      image: "https://source.unsplash.com/featured/800x600/?Swiss%20Alps",
      teaser: "Winter wonderland for ski enthusiasts",
      details: "Discover Swiss Alps in Switzerland – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ],
  July: [
    {
      name: "Bali",
      image: "https://source.unsplash.com/featured/800x600/?Bali",
      teaser: "Tropical paradise with pristine beaches",
      details: "Discover Bali in Indonesia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Canadian Rockies",
      image: "https://source.unsplash.com/featured/800x600/?Canadian%20Rockies",
      teaser: "Alpine lakes and mountain adventures",
      details: "Discover Canadian Rockies in Canada – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Croatia",
      image: "https://source.unsplash.com/featured/800x600/?Croatia",
      teaser: "Coastal beauty and historic towns",
      details: "Discover Croatia in Croatia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Hawaii",
      image: "https://source.unsplash.com/featured/800x600/?Hawaii",
      teaser: "Tropical winter escape",
      details: "Discover Hawaii in USA – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Lapland",
      image: "https://source.unsplash.com/featured/800x600/?Lapland",
      teaser: "Northern lights and Santa’s village",
      details: "Discover Lapland in Finland – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "New England",
      image: "https://source.unsplash.com/featured/800x600/?New%20England",
      teaser: "Fall foliage and coastal charm",
      details: "Discover New England in USA – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Provence",
      image: "https://source.unsplash.com/featured/800x600/?Provence",
      teaser: "Lavender fields and wine tasting",
      details: "Discover Provence in France – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Swiss Alps",
      image: "https://source.unsplash.com/featured/800x600/?Swiss%20Alps",
      teaser: "Winter wonderland for ski enthusiasts",
      details: "Discover Swiss Alps in Switzerland – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ],
  August: [
    {
      name: "Bhutan",
      image: "https://source.unsplash.com/featured/800x600/?Bhutan",
      teaser: "Himalayan trekking and culture",
      details: "Discover Bhutan in Bhutan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Canadian Rockies",
      image: "https://source.unsplash.com/featured/800x600/?Canadian%20Rockies",
      teaser: "Alpine lakes and mountain adventures",
      details: "Discover Canadian Rockies in Canada – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Croatia",
      image: "https://source.unsplash.com/featured/800x600/?Croatia",
      teaser: "Coastal beauty and historic towns",
      details: "Discover Croatia in Croatia – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Hawaii",
      image: "https://source.unsplash.com/featured/800x600/?Hawaii",
      teaser: "Tropical winter escape",
      details: "Discover Hawaii in USA – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Machu Picchu",
      image: "https://source.unsplash.com/featured/800x600/?Machu%20Picchu",
      teaser: "Dry season and ancient ruins",
      details: "Discover Machu Picchu in Peru – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "New Zealand",
      image: "https://source.unsplash.com/featured/800x600/?New%20Zealand",
      teaser: "Spring blooms and hiking trails",
      details: "Discover New Zealand in New Zealand – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Provence",
      image: "https://source.unsplash.com/featured/800x600/?Provence",
      teaser: "Lavender fields and wine tasting",
      details: "Discover Provence in France – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Swiss Alps",
      image: "https://source.unsplash.com/featured/800x600/?Swiss%20Alps",
      teaser: "Winter wonderland for ski enthusiasts",
      details: "Discover Swiss Alps in Switzerland – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ],
  September: [
    {
      name: "Bhutan",
      image: "https://source.unsplash.com/featured/800x600/?Bhutan",
      teaser: "Himalayan trekking and culture",
      details: "Discover Bhutan in Bhutan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Canadian Rockies",
      image: "https://source.unsplash.com/featured/800x600/?Canadian%20Rockies",
      teaser: "Alpine lakes and mountain adventures",
      details: "Discover Canadian Rockies in Canada – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Dubai",
      image: "https://source.unsplash.com/featured/800x600/?Dubai",
      teaser: "Luxury shopping and desert adventures",
      details: "Discover Dubai in UAE – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Kruger National Park",
      image: "https://source.unsplash.com/featured/800x600/?Kruger%20National%20Park",
      teaser: "Prime wildlife viewing season",
      details: "Discover Kruger National Park in South Africa – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Machu Picchu",
      image: "https://source.unsplash.com/featured/800x600/?Machu%20Picchu",
      teaser: "Dry season and ancient ruins",
      details: "Discover Machu Picchu in Peru – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "New Zealand",
      image: "https://source.unsplash.com/featured/800x600/?New%20Zealand",
      teaser: "Spring blooms and hiking trails",
      details: "Discover New Zealand in New Zealand – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Rio de Janeiro",
      image: "https://source.unsplash.com/featured/800x600/?Rio%20de%20Janeiro",
      teaser: "Carnival celebrations and beach life",
      details: "Discover Rio de Janeiro in Brazil – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Swiss Alps",
      image: "https://source.unsplash.com/featured/800x600/?Swiss%20Alps",
      teaser: "Winter wonderland for ski enthusiasts",
      details: "Discover Swiss Alps in Switzerland – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ],
  October: [
    {
      name: "Bhutan",
      image: "https://source.unsplash.com/featured/800x600/?Bhutan",
      teaser: "Himalayan trekking and culture",
      details: "Discover Bhutan in Bhutan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Canadian Rockies",
      image: "https://source.unsplash.com/featured/800x600/?Canadian%20Rockies",
      teaser: "Alpine lakes and mountain adventures",
      details: "Discover Canadian Rockies in Canada – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Dubai",
      image: "https://source.unsplash.com/featured/800x600/?Dubai",
      teaser: "Luxury shopping and desert adventures",
      details: "Discover Dubai in UAE – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Kruger National Park",
      image: "https://source.unsplash.com/featured/800x600/?Kruger%20National%20Park",
      teaser: "Prime wildlife viewing season",
      details: "Discover Kruger National Park in South Africa – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Machu Picchu",
      image: "https://source.unsplash.com/featured/800x600/?Machu%20Picchu",
      teaser: "Dry season and ancient ruins",
      details: "Discover Machu Picchu in Peru – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "New Zealand",
      image: "https://source.unsplash.com/featured/800x600/?New%20Zealand",
      teaser: "Spring blooms and hiking trails",
      details: "Discover New Zealand in New Zealand – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Rio de Janeiro",
      image: "https://source.unsplash.com/featured/800x600/?Rio%20de%20Janeiro",
      teaser: "Carnival celebrations and beach life",
      details: "Discover Rio de Janeiro in Brazil – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Tokyo",
      image: "https://source.unsplash.com/featured/800x600/?Tokyo",
      teaser: "Cherry blossoms and modern city life",
      details: "Discover Tokyo in Japan – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ],
  November: [
    {
      name: "Bhutan",
      image: "https://source.unsplash.com/featured/800x600/?Bhutan",
      teaser: "Himalayan trekking and culture",
      details: "Discover Bhutan in Bhutan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Canadian Rockies",
      image: "https://source.unsplash.com/featured/800x600/?Canadian%20Rockies",
      teaser: "Alpine lakes and mountain adventures",
      details: "Discover Canadian Rockies in Canada – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Dubai",
      image: "https://source.unsplash.com/featured/800x600/?Dubai",
      teaser: "Luxury shopping and desert adventures",
      details: "Discover Dubai in UAE – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Kruger National Park",
      image: "https://source.unsplash.com/featured/800x600/?Kruger%20National%20Park",
      teaser: "Prime wildlife viewing season",
      details: "Discover Kruger National Park in South Africa – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Maldives",
      image: "https://source.unsplash.com/featured/800x600/?Maldives",
      teaser: "Overwater villas and coral reefs",
      details: "Discover Maldives in Maldives – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "New Zealand",
      image: "https://source.unsplash.com/featured/800x600/?New%20Zealand",
      teaser: "Spring blooms and hiking trails",
      details: "Discover New Zealand in New Zealand – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Rio de Janeiro",
      image: "https://source.unsplash.com/featured/800x600/?Rio%20de%20Janeiro",
      teaser: "Carnival celebrations and beach life",
      details: "Discover Rio de Janeiro in Brazil – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Tuscany",
      image: "https://source.unsplash.com/featured/800x600/?Tuscany",
      teaser: "Rolling hills and summer festivals",
      details: "Discover Tuscany in Italy – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ],
  December: [
    {
      name: "Bhutan",
      image: "https://source.unsplash.com/featured/800x600/?Bhutan",
      teaser: "Himalayan trekking and culture",
      details: "Discover Bhutan in Bhutan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Cape Town",
      image: "https://source.unsplash.com/featured/800x600/?Cape%20Town",
      teaser: "Sun-soaked coastal beauty",
      details: "Discover Cape Town in South Africa – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Edinburgh",
      image: "https://source.unsplash.com/featured/800x600/?Edinburgh",
      teaser: "Festival season and historic charm",
      details: "Discover Edinburgh in Scotland – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Kyoto",
      image: "https://source.unsplash.com/featured/800x600/?Kyoto",
      teaser: "Traditional temples and late cherry blossoms",
      details: "Discover Kyoto in Japan – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Maldives",
      image: "https://source.unsplash.com/featured/800x600/?Maldives",
      teaser: "Overwater villas and coral reefs",
      details: "Discover Maldives in Maldives – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "New Zealand",
      image: "https://source.unsplash.com/featured/800x600/?New%20Zealand",
      teaser: "Spring blooms and hiking trails",
      details: "Discover New Zealand in New Zealand – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Rio de Janeiro",
      image: "https://source.unsplash.com/featured/800x600/?Rio%20de%20Janeiro",
      teaser: "Carnival celebrations and beach life",
      details: "Discover Rio de Janeiro in Brazil – perfect for a unique travel experience with weather, culture, and adventure combined."
    },
    {
      name: "Tuscany",
      image: "https://source.unsplash.com/featured/800x600/?Tuscany",
      teaser: "Rolling hills and summer festivals",
      details: "Discover Tuscany in Italy – perfect for a unique travel experience with weather, culture, and adventure combined."
    }
  ]
};