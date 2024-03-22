import Event from "../models/Event.js";

async function create(req, res) {
  const {
    name,
    location,
    time,
    date,
    description,
    link,
    ageLimit,
    price,
    ticketCount,
    tax,
    discount,
  } = req.body;
  try {
    const event = await Event.create({
      name,
      user: req.user,
      location,
      time,
      link,
      description,
      ageLimit,
      price,
      date,
      ticketCount,
      tax,
      discount,
    });

    return res.status(200).json({ data: { event }, message: "Event created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getAll(req, res) {
  try {
    const event = await Event.find({});
  } catch (error) {}
}

async function remove(req, res) {
  const { eventId } = req.body;
  try {
    await Event.findByIdAndDelete(eventId);
    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
export { create, remove };
