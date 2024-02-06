// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
