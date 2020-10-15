//四舍五入保留2位小数（不够位数，则用0替补）
function keepTwoDecimalFull(num) {
    var result = parseFloat(num);
    if (isNaN(result)) {
        alert('传递参数错误，请检查！');
        return false;
    }
    result = Math.round(num * 100) / 100;
    var s_x = result.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}

$(document).ready(function () {
    $('#mainPanel').panel({
        closable: false,
        footer:'#ft'
    });


    $('#btn_SPL').bind('click', function () {
        var num1=$('#tb_1').numberbox('getValue');
        var num2=$('#tb_2').numberbox('getValue');
        var huaju=keepTwoDecimalFull((num1-5)/num2);

        var num3=$('#tb_3').numberbox('getValue');
        var jiepai=keepTwoDecimalFull((num3-3)/num2);

        $('#tb_4').textbox('setValue',huaju);
        $('#tb_5').textbox('setValue',jiepai);

        var huashuilu = Math.round(60/jiepai);
        $('#tb_6').textbox('setValue',huashuilu);

        var swolf = num2*1+num3*1;
        $('#tb_7').textbox('setValue',swolf);

        var yousu = keepTwoDecimalFull(num1/num3);
        $('#tb_8').textbox('setValue',yousu);

        var baimipeisu = parseInt((num3*100/num1*1.05)/60)+"分"+parseInt(num3*100/num1*1.05)%60+"秒";
        $('#tb_9').textbox('setValue',baimipeisu);

        //顶尖、高手、优秀、中级、合格、菜鸟
        //<60，60～70，70～80， 80～90， 90～100 , >100
        if(swolf <= 60) {
            $('#tb_10').text('顶尖');
            $('#tb_10').css('background-color','green');
        } else if(swolf <= 70) {
            $('#tb_10').text('高手');
            $('#tb_10').css('background-color','yellow');
        } else if(swolf <= 80) {
            $('#tb_10').text('优秀');
            $('#tb_10').css('background-color','#ffab2e');
        } else if(swolf <= 90) {
            $('#tb_10').text('中级');
            $('#tb_10').css('background-color','blue');
        } else if(swolf <= 100) {
            $('#tb_10').text('合格');
            $('#tb_10').css('background-color','#ffa8a8');
        } else {
            $('#tb_10').text('菜鸟');
            $('#tb_10').css('background-color','red');
        }

    });
});

