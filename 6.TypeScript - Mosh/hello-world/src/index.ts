type Employee = {
  readonly id: number;
  name: string;
  fax?: number;
  retire: (date: Date) => void;
};

let empluyee: Employee = {
  id: 1,
  name: "Bobo",
  retire: (date: Date) => {
    console.log(date);
  },
};
