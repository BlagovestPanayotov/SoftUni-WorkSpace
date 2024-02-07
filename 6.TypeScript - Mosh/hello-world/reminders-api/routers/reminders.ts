import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminders";

const remindersRouter = Router();

remindersRouter.get("/", (req, res) => {
  res.send("List of reminders");
});

remindersRouter.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  res.json(title);
});

export default remindersRouter;
