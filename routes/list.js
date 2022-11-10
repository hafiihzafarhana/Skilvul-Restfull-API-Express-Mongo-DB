const express = require('express');
const router = express.Router();

const {getAllList, getListById, postList, updateListById, deleteListById, deleteAllList, getAuth} = require('./../controllers/c_list');

router.get('/', getAllList);
router.get('/:id', getListById);
router.post("/", postList);
router.put('/:id', updateListById);
router.delete('/:id', deleteListById);
router.delete('/', deleteAllList);

module.exports = router;