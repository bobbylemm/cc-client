import { auth } from './firebase'

interface LoginPayload {
    email: string;
    password: string;
}

export const login = async ({ email, password }: LoginPayload) => {
    try {
        return await auth.signInWithEmailAndPassword(email, password)
    } catch(error) {
        return error
    }
}