import { Request, Response } from 'express';
import { Title } from '../models/Title';

export const getAllTitles = async (req: Request, res: Response) => {
    try {
        const titles = await Title.findAll();
        res.status(200).json(titles);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const getTitleByIsbn = async (req: Request, res: Response) => {
    try {
        const title = await Title.findByPk(req.params.id);
        res.status(200).json(title);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const createTitle = async (req: Request, res: Response) => {
    try {
        const title = await Title.create(req.body);
        res.status(201).json(title);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const updateTitle = async (req: Request, res: Response) => {
    try {
        const title = await Title.findByPk(req.params.id);
        if (title) {
            await title.update(req.body);
            res.status(200).json(title);
        } else {
            res.status(404).json({ error: 'Title not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const deleteTitle = async (req: Request, res: Response) => {
    try {
        const title = await Title.findByPk(req.params.id);
        if (title) {
            await title.destroy();
            res.status(204).json({ message: 'Title deleted' });
        } else {
            res.status(404).json({ error: 'Title not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

