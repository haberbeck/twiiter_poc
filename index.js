var express = require('express');
var app = express();

var Twitter = require('twitter');
var config = require('./config');
 

var client = new Twitter({
  consumer_key: config.twitter.CONSUMER_KEY,
  consumer_secret: config.twitter.CONSUMER_SECRET,
  access_token_key: config.twitter.ACCESS_TOKEN_KEY,
  access_token_secret: config.twitter.ACCESS_TOKEN_SECRET
});



//busca por hashtag
var _hashtag;
_hashtag = '#olympic';


//parametros para fazer a busca no twitter
var parametros ={
	q: _hashtag, 
	count: '1',
	result_type: 'mixed',
	lang: 'pt'
};

client.get('search/tweets', parametros, function(error, tweets, response) {
	if(!error){

		var result = tweets;
		var hashtag, user_id, name, screen_name, followers_count, lang, tweet, date, schedule, hour;


		//console.log(result.statuses.length);

		for(var i=0; i<result.statuses.length; i++){
			var item = result.statuses[i];

			hashtag = _hashtag;
			user_id = item.user.user_id;
			name = item.user.name;
			screen_name = item.user.screen_name;
			followers_count = item.user.followers_count;
			lang = item.lang;
			tweet = item.text;

			//tratamento de datas
			var data_tweet = new Date(item.created_at)
			date = ('0' + data_tweet.getDate()).slice(-2) + '/' + ('0' +(data_tweet.getMonth() + 1)).slice(-2)  + '/' + data_tweet.getFullYear();
			schedule =  data_tweet.getHours() + ':' + (data_tweet.getMinutes() + 1)  + ':' + data_tweet.getSeconds();
			hour = data_tweet.getHours();
			
			//Obejto do Usuário
			var u = item.user;
			console.log('############### USER ############');
			console.log(u);
			console.log('############### USER END ############');
			
		}

	}
	else{
		console.log('Erro ao procurar tweets =(');
	}
   
});

var server = app.listen(3000, function(){
	console.log("servidor rodando.");
})
