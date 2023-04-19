export default function getFullResponseFromAPI(success) {
let k = new Promise (function (resolve, reject) {
if (success == true) {
	resolve({status: 200,
		 body: 'Success',});
}
else {
	reject( d error('The fake API is not working currently'));
}
});
return k;
}
