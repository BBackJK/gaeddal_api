let authNumber;
const stored = {};

stored.setNumber = (number) => {
  authNumber = number;
};

stored.getNumber = () => authNumber;

export default stored;
