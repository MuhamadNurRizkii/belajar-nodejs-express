const tambah = (a, b) => {
  return a + b;
};

const kali = (a, b) => {
  return a * b;
};

const getUser = () => {
  return {
    id: 1,
    name: "Andi",
    age: 20,
    address: "Bandung",
  };
};

export { tambah, getUser, kali };
