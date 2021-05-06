window.onload = function(){
    $.getJSON("https://spreadsheets.google.com/feeds/list/1Wr8QyZhfCbVnRL4I_VRWEViNytulCC84Ta3erGWeOqE/od6/public/values?alt=json",
        function (data) {
            console.log(data);
            data = data['feed']['entry'];
            console.log(data);
            showProduct(data);

        }
    );
    function showProduct(data){
        var out = ''
        console.log(data.length);
        for (var i = 0; i < data.length; i++){
             out += `<div class="card">`;
             out += `<h3 class="title">${data[i]['gsx$name']['$t']}</h3>`;
             out += `<img src="${data[i]['gsx$image']['$t']}" alt="">`;
             out += `<p class="price">Цена:${data[i]['gsx$price']['$t']} </p>`;
             out += `</div>`;
        }
        document.querySelector('.shop_field').innerHTML = out;
        // $('.product_field').html(out);
    }
}