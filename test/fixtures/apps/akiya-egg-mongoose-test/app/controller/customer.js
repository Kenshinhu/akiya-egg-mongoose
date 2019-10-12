'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async create() {
    const { body } = this.ctx.request;
    this.ctx.body = await this.ctx.service.customer.save(body);
  }

}

module.exports = HomeController;
