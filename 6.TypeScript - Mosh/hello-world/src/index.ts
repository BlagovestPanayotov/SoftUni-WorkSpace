let empluyee: {
  readonly id: number;
  name: string;
  fax?: number;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Bobo",
  retire: (date: Date) => {
    console.log(date);
  },
};
