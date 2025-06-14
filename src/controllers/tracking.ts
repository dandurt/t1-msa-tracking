import { Request, Response } from 'express';
import Tracking from '../models/Tracking';
import { Parser } from 'json2csv';

export const trackEvent = async (req: Request, res: Response) => {
  const { component, variant, action } = req.body;
  if (!component || !action) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const track = new Tracking({ component, variant, action });
  await track.save();
  res.status(201).json({ message: 'Event tracked' });
};

export const getStats = async (_: Request, res: Response) => {
  const stats = await Tracking.aggregate([
    { $group: { _id: "$component", count: { $sum: 1 } } }
  ]);
  res.json(stats);
};

export const exportData = async (req: Request, res: Response) => {
  const format = req.query.format || 'json';
  const data = await Tracking.find().lean();

  if (format === 'csv') {
    const parser = new Parser();
    const csv = parser.parse(data);
    res.header('Content-Type', 'text/csv');
    res.attachment('tracking.csv');
    return res.send(csv);
  }

  res.json(data);
};
