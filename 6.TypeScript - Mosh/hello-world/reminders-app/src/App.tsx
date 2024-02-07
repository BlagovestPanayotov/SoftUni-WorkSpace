import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";

const reminders: Reminder[] = [{ id: 1, title: "Reminder1" }];

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
