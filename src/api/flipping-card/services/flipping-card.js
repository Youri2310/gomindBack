'use strict';

/**
 * flipping-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flipping-card.flipping-card');
