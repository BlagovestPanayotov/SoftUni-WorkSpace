import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminders";
import Reminder from "../models/reminder";

const remindersRouter = Router();
const reminders: Reminder[] = [];

remindersRouter.get("/", (req, res) => {
  res.json(reminders);
});

remindersRouter.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminder);
});

export default remindersRouter;
