interface SportOffer {
  id: number;
  name: string;
  offers: Offer[];
}

interface Offer {
  pics: Pic[];
  id: number;
  name: string;
  trainer: Trainer[];
  link: string;
  description: string;
  location: Location;
  date: Date[];
  prices: Prices;
  maxParticipants: number;
  minParticipants: number;
  period: string;
}

interface Pic {
  name: string;
  url: string;
}

interface Trainer {
  name: string;
}

interface Location {
  name: string;
  adress: string;
}

interface Date {
  day: string;
  time: string;
}

interface Prices {
  students: string;
  employees: string;
  alumni: string;
  guests: string;
}

// Usage
const sports: SportOffer[] = [/*... your data ...*/];
