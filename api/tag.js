import {
	request
} from '../utils/request.js'
import {
	appConfig
} from '../config/config.js'


export function saveTag(tagInfo) {
	return request.post(appConfig.WEB_API + '/platform/tag/saveTag', tagInfo)
}


export function getAllTag(page, limit, params) {
	return request.get(appConfig.WEB_API + `/web/tag/getTagByKeyword/${page}/${limit}`, params)
}


export function getImgListByTagId(page, limit, params) {
	return request.get(appConfig.WEB_API + `/platform/tag/getImgListByTagId/${page}/${limit}`, params)
}


export function getOneTag(params) {
	return request.get(appConfig.WEB_API + '/platform/tag/getOneTag', params)
}