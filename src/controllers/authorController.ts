import { Request, Response } from "express";
import { Author } from "../models/Author";

export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByPk(req.params.id);
    res.status(200).json(author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export const updateAuthor = async (req: Request, res: Response) => {
    try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      await author.update(req.body);
      res.status(200).json(author);
    } else {
      res.status(404).json({ error: "Author not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      await author.destroy();
      res.status(204).json({ message: "Author deleted" });
    } else {
      res.status(404).json({ error: "Author not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

