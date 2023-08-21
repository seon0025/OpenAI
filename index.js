const axios = require("axios");

exports.handler = async (event) => {
  try{
    const dogResult = await axios.get("https://dog.ceo/api/breeds/image/random");
    
    const dog = {
        "content":"안녕!",
        "embeds": [{
          "author":{
            "name": "강아지",
            "icon_url":"https://dog.ceo/api/breeds/image/random"
          },
          "description":"Powered by [dog API]",
          "image": {
            "url": dogResult.data.message
          }
        }]
    }

    const discordUrl = config.key;
    
    if (event.bot === "dog"){
      const result = await axios.post(discordUrl, dog);
    }

    console.info("디스코드 웹훅 성공");
  }
  catch(err){
    console.err("웹훅 실패", err);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
