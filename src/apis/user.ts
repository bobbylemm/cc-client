import { fireStore } from './firebase'

const userRef = fireStore.collection('users')

export const getUserDetails = async (id: string) => {
    let response;
    try {
        const doc = await userRef.doc(id).get()
        if (!doc) {
            response = null
        }
        return doc.data()
    } catch (error) {
        return error
    }
}