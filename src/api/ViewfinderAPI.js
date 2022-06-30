import axios from 'axios';

function viewfinderCall() {

    axios({
        method: "post",
        url: "https://viewfinder.co.kr/apiTestAjax",
        data : {
            'name' : '홍길동'
        },
        responseType: "json"
    }).then(function (response) {
        console.log( '-----------------------------------------------------------' );
        console.log( '-----------------------------------------------------------' );
        console.log( response.data );
        console.log( '-----------------------------------------------------------' );
        console.log( '-----------------------------------------------------------' );
    }).catch(function( e){
        console.error( e );
    });
}

function viewfinderCall2() {
    alert( 'viewfindercall2' );
}

export default { viewfinderCall, viewfinderCall2 };
