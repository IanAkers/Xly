var Startup = Backbone.Model.extend({
	defaults: {
		name: '',
		city: '',
		state: '',
		// fundingStatus: '',
		// active: true
	},
  
  initialize: function(params) {
    this.set('name', params.name);
    this.set('state', params.state_code);
    this.set('city', params.city);
  }
})
