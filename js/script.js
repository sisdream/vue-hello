const { createApp } = Vue;

createApp({
    data(){
        return{
           message: "hello vue",
           image: "https://i.gifer.com/7VE.gif",
        };
    },
})
.mount('#app');