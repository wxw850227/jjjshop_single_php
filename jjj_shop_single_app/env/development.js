let url = 'http://www.jjj-shop-v3-small.com';
if(process.env.NODE_ENV != 'development'){
	url = '/api';
}
export default {
	url
}
