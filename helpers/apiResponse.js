module.exports = function (res, status = 200, msg = "", data = []) {
	var resData = {
		status: status,
		message: msg,
		data: data
	};
	return res.status(status).json(resData);
};