const chalk = require('chalk')
const chalkPipe = require('chalk-pipe');
const inquirer = require('inquirer')
const axios = require('axios')
const fs = require('fs')

const prompt = inquirer.createPromptModule()
const portPage = require('./portPage.js')

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: chalk.blueBright('What is your name? ')
  },
  {
    type: 'input',
    name: 'link',
    message: chalk.blueBright('What is the URL of your portfolio? ')
  },

  {
    type: 'input',
    name: 'image',
    message: chalk.greenBright('What is the URL of your profile image?')
  }]
).then(response => {
  console.log(response)
})

function writeNewFile() {
  fs.writeFile('newpage.html', 'some text', (e, response) => {
    if (e) {
      fs.appendFile('newpage.html', portPage, (e, response) => {
        if (e) {
          fs.readFile('newpage.html', 'utf8', (e, response) => {
            if (e) {
              console.log(e)
            }
            console.log(text)
          })
        }
      })
    }
  })
}
writeNewFile()

  //Read's file that was created above.