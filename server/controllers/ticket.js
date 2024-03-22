import Event from "../models/Event";
import Ticket from "../models/Ticket";

async function create(req, res) {
  const { eventId } = req.body;
  try {
    const ticket = await Ticket.create({
      user: req.user,
      event: eventId,
    });
    const event = await Event.findByIdAndUpdate(eventId, { $set: {} });
  } catch (error) {}
}
