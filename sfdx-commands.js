const { spawn } = require('node:child_process')

const command = spawn('sfdx',['force:source:deploy','-p','force-app/main/default/classes','--json'])

command.stdout.on('data', output => {

    let json = JSON.parse(output.toString());
    let message = `A deployment was created by ${json.result.createdByName} with Deployment Id ${json.result.id}`;
    console.log(message)
})
