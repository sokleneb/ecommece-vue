import { defineStore } from "pinia";

let id  = 0;

export const useUsersStore = defineStore( "users" , {
    state : () => ({
        users :   [
            {id: id++, name : "saklain", email : "saklain@gmail.com" , password : "1234", address : "BTM", phoneNumber : 123456789 },
            {id: id++, name : "alex", email : "alex@gmail.com" , password : "1234", address : "HSR", phoneNumber : 9090897634 },
        ],
        currentuser : null,
    }),
    actions : {
        login(email, password){
            const user = this.users.find( u => u.email === email && u.password === password )
            if(user){
                this.currentuser = user
                return true 
            }
            return false 
        },
        signup(name, email, password, address, phoneNumber){
            const exists = this.users.find((u)=> u.email === email)
            if(exists) return { success : false, message : "Email already registered"}
            const newUser = {
                id : id++,
                name, 
                email,
                password,
                address,
                phoneNumber
            }
            this.users.push(newUser)
            this.currentuser = newUser 
            return { success : true , message: "SignUp Successful!!!"}
        }
    }
} 

)