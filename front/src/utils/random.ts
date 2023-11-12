interface RandomIntProps {
  min: number;
  max: number;
}

export const getRandomInt = ({ min, max }: RandomIntProps) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
