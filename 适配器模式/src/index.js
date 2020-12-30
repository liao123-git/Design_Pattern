import _ from 'lodash';

// vue代码
/*
    <body>
        <div id='#app'>
            <p>顺序：{{message}}</p>
            <p>逆序：{{reversedMessage}}</p>
        </div>
        <script>
            let vue = new Vue({
                el: "#app",
                data(){
                    return: {
                        message:"hello"
                    }
                },
                computed: {
                    reversedMessage: ()=>{
                        return message.split('').reverse().join('');
                    }
                }
            })
        </script>
    </body>
*/