import expresse from 'express';
import * as formatController from '../controllers/formatController';

const router = expresse.Router();

router.get('/', formatController.getAllFormats);
router.get('/:id', formatController.getFormatById);
router.post('/', formatController.createFormat);
router.put('/:id', formatController.updateFormat);
router.delete('/:id', formatController.deleteFormat);

export default router;