export interface LoginProps {
    navigation: any,
    email: string,
    password: string,
    setEmail: (email: string) => void,
    setPassword: (password: string) => void,
    handleLogin: () => void
}