'use strict';
function recountVal(val){
    switch(val){
		case 1: return '500 Subscribers'; break;
        case 2: return '5k'; break;
        case 3: return '10k'; break;
        case 4:return 'Need<br>More?';break;
    }
}
var pricingSlider = document.getElementById('pricing-slider');
if(pricingSlider){
    noUiSlider.create(pricingSlider, {
        start: 1,
        connect: 'lower',
        step: 1,
        range: {
          'min':[1,1],
          '35%':[2,1],
          '70%':[3,1],
          'max':[4,1]
        },
        pips: {
            mode: 'steps',
            values: [0,1,2,3],
            density:100
        }
    });

    pricingSlider.noUiSlider.on('update', function ( values, handle ) {
        var price_text = '',subscriberCount =0;
        $('#show-price-value2').hide();
		$('#show-price-value3').hide();
        $('#show-price-value1').show();
        switch(Number(values[handle])){
			case 1: $('#show-price-value2').show();
                    $('#show-price-value1').hide();
					$('#show-price-value3').hide();
                    break;
            case 2: price_text='29';
                    subscriberCount = 5000;
                    break;
            case 3: price_text='49';
                    subscriberCount = 10000;
                    break;
            case 4: $('#show-price-value3').show();
                    $('#show-price-value1').hide();
					$('#show-price-value2').hide();
                    break;
        }
        $('#premium-price-text').text(price_text);
		$('#premium-message-text').text(subscriberCount);
    });

    $('#pricing-slider .noUi-value.noUi-value-horizontal.noUi-value-large').each(function(){
        var val = $(this).html();
        val = recountVal(parseInt(val));
        $(this).html(val);
    });
}