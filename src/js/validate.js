function validateForms(form) {
    $(form).validate({
        rules: {
            first_name: "required",
            last_name: "required",
            email: {
                required: true,
                email: true,
            },
            project_descr: "required",
        },
        messages: {
            first_name:  {
                required: "Input must not be blank",
            },
            last_name:  {
                required: "Input must not be blank",
            },
            email: {
                required: "Input must not be blank",
            },
            project_descr:  {
                required: "Input must not be blank",
            },
        }
    });
}

validateForms('.form');


$('form').submit(function (e) {
    e.preventDefault();

    if ($('.input').val() === '') {
        $(this).parent().addClass('invalid');
    }

    $.ajax({
        type: "POST",
        url: "send.php",
        data: $(this).serialize(),
    });
    $('.input').removeClass('valid');
    $(this).find("input").val("");
    $('form').trigger('reset');
    return false;
});


/* var $prototype_timeframe = $("#prototype_timeframe");
    var prototype_timeframe_values = ["To Be Discussed", "3 months", "6 months", "1 year"];
    var prototype_timeframe_from = prototype_timeframe_values.indexOf("To Be Discussed");
    var prototype_timeframe_to = prototype_timeframe_values.indexOf("1 year");
    var prototype_timeframe_value = $('#prototype-timeframe-value');
    var prototype_timeframe_instance;
    $prototype_timeframe.ionRangeSlider({
        grid: true,
        grid_num: 4,
        grid_snap: true,
        step: 1,
        from: prototype_timeframe_from,
        to: prototype_timeframe_to,
        values: prototype_timeframe_values,
        onStart: function (data) {
            prototype_timeframe_value.text(prototype_timeframe_values[data.from]);
        },
        onChange: function (data) {
            prototype_timeframe_value.text(prototype_timeframe_values[data.from]);
        }
    });
    prototype_timeframe_instance = $prototype_timeframe.data("ionRangeSlider");

    var $production_timeframe = $("#production_timeframe");
    var production_timeframe_values = ["To Be Discussed", "6-8 months", "10-12 months", "12-18 months", "Till completion"];
    var production_timeframe_from = production_timeframe_values.indexOf("To Be Discussed");
    var production_timeframe_to = production_timeframe_values.indexOf("Till completion");
    var production_timeframe_value = $('#production-timeframe-value');
    var production_timeframe_instance;
    $production_timeframe.ionRangeSlider({
        grid: true,
        grid_num: 5,
        grid_snap: true,
        step: 1,
        from: production_timeframe_from,
        to: production_timeframe_to,
        values: production_timeframe_values,
        onStart: function(data) {
            production_timeframe_value.text(production_timeframe_values[data.from]);
        },
        onChange: function (data) {
            production_timeframe_value.text(production_timeframe_values[data.from]);
        }
    });
    production_timeframe_instance = $production_timeframe.data("ionRangeSlider");

    var $production_volume = $("#production_volume");
    var production_volume_values = ["<100", "500", "1 000", "5 000", "10 000", "10 000+"];
    var production_volume_from = production_volume_values.indexOf("<100");
    var production_volume_to = production_volume_values.indexOf("10 000+");
    var production_volume_value = $('#production-volume-value');
    var production_volume_instance;
    $production_volume.ionRangeSlider({
        grid: true,
        grid_num: 6,
        grid_snap: true,
        step: 1,
        from: production_volume_from,
        to: production_volume_to,
        values: production_volume_values,
        onStart: function (data) {
            production_volume_value.text(production_volume_values[data.from]);
        },
        onChange: function (data) {
            production_volume_value.text(production_volume_values[data.from]);
        }
    });

    production_volume_instance = $production_volume.data("ionRangeSlider"); */