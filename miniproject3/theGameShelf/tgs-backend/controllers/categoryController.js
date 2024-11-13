// controllers/categoryController.js

import { Category } from '../models/index.js';
import { Op } from 'sequelize';

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found.' });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if category with the same name already exists
    const existingCategory = await Category.findOne({ where: { name } });
    if (existingCategory) {
      return res.status(400).json({ error: 'Category with this name already exists.' });
    }

    const category = await Category.create({ name });
    res.status(201).json({ message: 'Category created successfully.', category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found.' });

    const { name } = req.body;
    if (name) {
      // Check if another category with the same name exists
      const existingCategory = await Category.findOne({ where: { name, id: { [Op.ne]: category.id } } });
      if (existingCategory) {
        return res.status(400).json({ error: 'Another category with this name already exists.' });
      }
      category.name = name;
    }

    await category.save();

    res.json({ message: 'Category updated successfully.', category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found.' });

    // Optionally, check if there are items associated with this category
    const items = await category.getItems();
    if (items.length > 0) {
      return res.status(400).json({ error: 'Cannot delete category with associated items.' });
    }

    await category.destroy();

    res.json({ message: 'Category deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};