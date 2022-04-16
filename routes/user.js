const {Router} = require('express') 
const router = Router()
const user = require('../mock/user')
const uuid = require('uuid')
// Get
router.get('/', (req, res) => {
    res.json(user)
})

// Query Get
router.get('/:id', (req, res) => { 
    var isFind = user.some((e) => e.id == req.params.id)
    if(isFind){
        const data = user.filter((value) => value.id == req.params.id)
        res.json(data)
    }else{
        res.status(404).json({message: ` ${req.params.id} dagi User topilmadi`})
    }
})

// Post method
router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,    
        age: req.body.age
    }
     if(!req.body.name || !req.body.age){
       return  res.status(400).json({message: 'Malumotni ohirgacha toldiring'})
     }
    user.push(newUser)
    res.json(user)
})

module.exports = router