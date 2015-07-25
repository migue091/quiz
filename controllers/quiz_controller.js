var models = require('../models/models.js');

// GET /quizes/:id
exports.index = function(req,res) {
	models.Quiz.findAll().then(function(quizes) {
		res.render('quizes/index.ejs',{quiz: quizes});
	})
};

// GET /quizes/answer
exports.answer = function(req,res) {
	models.Quiz.findAll(req.params.quizId).then(function(quiz) {
		if (req.query.respuesta === quiz.respuesta) {
			res.render('quizes/answer',{quiz: quiz, respuesta: 'Correcto'});
		}
		else {
			res.render('quizes/answer',{quiz: quiz, respuesta: 'Incorrecto'});
		}
	})
};