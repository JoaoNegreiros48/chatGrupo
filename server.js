const venom = require('venom-bot');
const axios = require('axios').default;
const comands = "#bot cat //  #bot dog // #bot fox // #bot covid // #bot conselho // #bot humano // #bot responda // #bot marvel // #bot bolsonaro"

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {

    // gato
    if (message.body === '#bot cat') {
      client
      .sendText(message.from, 'https://cataas.com/cat!')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
    }

    // dog
    if (message.body === '#bot dog') {
      axios.get('https://random.dog/woof.json')
      .then(function (response) {
        client
          .sendText(message.from, response.data.url)
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
      })
    }

    // raposa
    if (message.body === '#bot fox') {
      axios.get('https://randomfox.ca/floof/')
      .then(function (response) {
        client
          .sendText(message.from, response.data.image)
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
      })
    }

    // covid
    if (message.body === '#bot covid') {
      client
      .sendText(message.from, 'https://covid-19.dataflowkit.com/assets/widget/covid-19.html')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
    }

    // help
    if (message.body === '#bot help') {
      client
      .sendText(message.from, comands)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
    }

    // conselho
    if (message.body === '#bot conselho') {
      axios.get('https://api.adviceslip.com/advice')
      .then(function (response) {
        client
          .sendText(message.from, response.data.slip.advice)
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
      })
    }

    // humano
    if (message.body === '#bot humano') {
      client
      .sendText(message.from, "https://thispersondoesnotexist.com/")
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
    }

    // responda
    if (message.body === '#bot responda') {
      axios.get('https://yesno.wtf/api')
      .then(function (response) {
        client
          .sendText(message.from, response.data.answer)
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
      })
    }

    // marvel
    if (message.body === '#bot marvel') {
      axios.get('https://www.whenisthenextmcufilm.com/api')
      .then(function (response) {
        client
          .sendText(message.from, `${(response.data.days_until).toString()} dias para o proximo lançamento`)
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
      })
    }

    // bolsonaro
    if (message.body === '#bot bolsonaro') {
      client
      .sendText(message.from, 'EI BOLSONARO! VAI TOMAR NO CU')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
    }
  });
}