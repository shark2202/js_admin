define(function (require) {
	var Cookies = require('Cookie')
	,config = require('app/config/config1');

	const { TOKEN, cookieExpires } = config;

	const TOKEN_KEY = TOKEN;

	const setToken = (token) => {
	  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
	}

	const getToken = () => {
	  const token = Cookies.get(TOKEN_KEY)
	  if (token) return token
	  else return false
	}

	return {
		setToken,
		getToken
	};
});