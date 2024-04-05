const headphones = [
  {
    id: 1,
    img: "./assets/headphones/s8521.png",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    id: 2,
    img: "./assets/headphones/earpods1.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 3,
    img: "./assets/headphones/earpods2.png",
    title: "Apple EarPods",
    price: 2556,
    rate: 4.7,
  },
  {
    id: 4,
    img: "./assets/headphones/s8521.png",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    id: 5,
    img: "./assets/headphones/earpods1.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 6,
    img: "./assets/headphones/earpods2.png",
    title: "Apple EarPods",
    price: 4059,
    rate: 4.6,
  },
];

const wireless_headphones = [
  {
    id: 7,
    img: "./assets/headphones/airpods.png",
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    id: 8,
    img: "./assets/headphones/gerlax.png",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    id: 9,
    img: "./assets/headphones/borofone.png",
    title: "BOROFONE BO4",
    price: 7727,
    rate: 4.6,
  },
];

export const getHeadphones = () => headphones;
export const getWirelessHeadphones = () => wireless_headphones;
export const getHeadphoneById = (id) => {
  let headphone = headphones.find((item) => item.id === id);
  if (!headphone) {
    headphone = wireless_headphones.find((item) => item.id === id);
  }
  return headphone;
};
