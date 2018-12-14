const jwt = require('jsonwebtoken');
const config = require('../config')
const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email});
    //проверка пользователя существует ли он
    if (candidate) { // пользователь существует, проверяем пароль  
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (passwordResult) { //генерация токена
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, config.SECRET_TOKEN, {expiresIn: config.tokenTime});
            res.status(200).json({token: `Bearer ${token}`});
        } else { // парли не совпали
            res.status(401).json({message: 'Пароли не совпадают, попробуйте еще раз'});
        }
    } else {//нет такого пользователя
        res.status(404).json({message: 'Пользователь с таким email не найден'});
    }
}

module.exports.register = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email});
    //проверка пользователя существует ли он
    if (candidate) { 
    res.status(409).json({message: 'Такой email уже занят, попробуйте другой'});
    } else { // создаю пользователя
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
        try {
            await user.save();
            res.status(201).json(user);
        } catch(err) { // обработать ошибку
            }
    }
}