
import axiosClient from './axiosClient';
const handleAPI = async (
	url: string,
	data?: Record<string, unknown>,
	method: 'post' | 'put' | 'get' | 'delete' = 'get'
) => {
	return axiosClient(url, {
		method: method ?? 'get',
		data,
	});
};
export default handleAPI;
