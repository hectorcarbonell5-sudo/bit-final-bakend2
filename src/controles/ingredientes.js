import ingredient from '../models/ingredientes.js';

const ingredientController = {
    create: async (req,res)=>{
            try {
                const {name, type, description, price} = req.body;
                const newIngredient = new ingredient({
                   
                });
                await newIngredient.save();
                res.status(201).json({message: 'Ingrediente Creado'});
            } catch (error) {
                res.status(500).json({message: 'El ingrediente no fue creado.'})
            }
        },

    readAll: async (req,res)=>{
        try {
            const allIngredients = await ingredient.find();
            res.status(201).json({data: allIngredients});
        } catch (error) {
            res.status(500).json({ error: 'Error al encontrar los ingredientes.'})
        }
    },

    read: async (req,res)=>{
        try {
            const {id} = req.params;
            const ingredientFound = await ingredient.findById(id);
            if(!ingredientFound){
                res.status(404).json({message: 'Ingrediente no encontrado'})
            }
            res.status(201).json({data: ingredientFound})
        } catch (error) {
            res.status(500).json({message: 'Error al encontrar el producto'})
        }
    },

    update: async(req,res)=>{
        try{
            const {id} = req.params;
            const {name, type, description, price} = req.body;
            const ingredientUpdate = await ingredient.findByIdAndUpdate(id,{
                name,
                type,
                description,
                price
            })
            if(!ingredientUpdate){
                res.status(404).json('Ingrediente no encontrado')
            }else{
                res.status(200).json('Ingrediente modificado.')
            }
        }catch(error){
            res.status(500).json({message: 'Error al leer el ingrediente. ', error})
        }
    },
    delete: async (req,res)=>{
        try{
            const {id} = req.params;
            const ingredientDelete = await ingredient.findByIdAndDelete(id)
            if(!ingredientDelete){
                res.status(404).json('Ingrediente no encontrado')
            }else{
                res.status(200).json('Ingrediente Eliminado.')
            }
        }catch(error){
            res.status(500).json({message: 'Error al leer el ingrediente. ', error})
        }
    },
}

export default ingredientController;
