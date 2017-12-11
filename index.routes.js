'use strict'

const path = require('path')
const noteService = require("./note.service")

module.exports =
{
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.join('dist')
    }
  }
},
{
  method: 'GET',
  path: '/api/data',
  handler: async (request, reply) => {
    reply(await noteService.requestData())
  }
}
