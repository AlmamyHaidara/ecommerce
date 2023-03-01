import router from "@/router"
export function authGoard( to ){
    const token = localStorage.getItem('token')

    if(token){
        return true
    }

    router.push('/')
}