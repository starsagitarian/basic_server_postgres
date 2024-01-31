import express from 'express';
import * as titleController from '../controllers/titleController';

const router = express.Router();

router.get('/', titleController.getAllTitles);
router.get('/:isbn', titleController.getTitleByIsbn);
router.post('/', titleController.createTitle);
router.put('/:isbn', titleController.updateTitle);
router.delete('/:isbn', titleController.deleteTitle);

export default router;
