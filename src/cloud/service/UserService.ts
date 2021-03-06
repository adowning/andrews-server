/* eslint-disable no-console */
import QueryCreator from '../helpers/QueryCreator'

function createQuery() {
	const query = QueryCreator.createQuery('User')
	query.include('talents')
	// query.select('location', 'firstName', 'lastName', 'country', 'city',
	// 'email', 'skills', 'talent', 'about', 'authData', 'firebaseDeviceToken');
	return query
}

const get = async (userId: any, page: number) => {
	const pageSize = 20

	try {
		const query = createQuery()

		query.notEqualTo('objectId', userId)
		query.limit(pageSize)
		query.skip(page * pageSize)
		query.descending('createdAt')

		return await query.find({ useMasterKey: true })
	} catch (e) {
		console.log(e.message)
		throw e
	}
}

const getById = async (id: any) => {
	try {
		return await createQuery().get(id, { useMasterKey: true })
	} catch (e) {
		console.log(e.message)
		return null
	}
}

const getByEmail = async (email: any) => {
	try {
		const query = createQuery()
		query.equalTo('email', email)

		const result = await query.find({ useMasterKey: true })

		return result ? result[0] : null
	} catch (e) {
		console.log(e.message)
		return null
	}
}

const find = async (skip: any) => {
	try {
		const userQuery = createQuery()
		userQuery.skip(skip)

		return await userQuery.find({ useMasterKey: true })
	} catch (e) {
		console.log(e.message)
		throw e
	}
}

const count = async () => {
	try {
		return await createQuery().count()
	} catch (e) {
		console.log(e.message)
		throw e
	}
}

module.exports = {
	get,
	getById,
	getByEmail,
	find,
	count,
	createQuery,
}
