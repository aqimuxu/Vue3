const { createApp } = Vue
const app=createApp({
    data(){
        return {
            firstName:'John',
            lastName:'Doe',
            email:'John@gmail.com',
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods:{
        async getUser(){
            const res=await fetch('https://randomuser.me/api');
            const {result}=res.json();

            this.firstName=result[0].name.firstName;
            this.lastName=result[0].name.lastName;
            this.email=result[0].eamil;
            this.gender=result[0].gender;
            this.picture=result[0].picture.large;
        }
    }
})

app.mount('#app');