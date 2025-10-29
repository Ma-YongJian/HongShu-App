import {
	request
} from '../utils/request.js'
import {
	appConfig
} from '../config/config.js'



export function addBrowseRecord(data) {
	return request.post(appConfig.WEB_API + '/web/browseRecord/addBrowseRecord', data)
}

export function getAllBrowseRecordByUser(page, limit, params) {
	return request.get(appConfig.WEB_API + `/web/browseRecord/getAllBrowseRecordByUser/${page}/${limit}`, params)
}

export function delRecord(data, uid) {
	return request.post(appConfig.WEB_API + `/web/browseRecord/delRecord/${uid}`, data)
}