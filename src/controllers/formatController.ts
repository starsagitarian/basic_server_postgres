import { Request, Response } from 'express';
import { Format } from '../models/Format';

export const getAllFormats = async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const formats = await Format.findAll();
        res.status(200).json(formats);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const getFormatById = async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const format = await Format.findByPk(req.params.id);
        res.status(200).json(format);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

export const createFormat = async (req: Request, res: Response) => {
    try {
        const format = await Format.create(req.body);
        res.status(201).json(format);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

export const updateFormat = async (req: Request, res: Response) => {
    try {
        const format = await Format.findByPk(req.params.id);
        if (format) {
            await format.update(req.body);
            res.status(200).json(format);
        } else {
            res.status(404).json({ error: 'Format not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

export const deleteFormat = async (req: Request, res: Response) => {
    try {
        const format = await Format.findByPk(req.params.id);
        if (format) {
            await format.destroy();
            res.status(204).json({ message: 'Format deleted' });
        } else {
            res.status(404).json({ error: 'Format not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}