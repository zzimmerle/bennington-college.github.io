
$(document).ready(function () {
    $('#jqxTextArea').jqxTextArea({ width: 250, height: 100, placeHolder: 'Enter text to be frequency counted here' });
});

var originalPlaintext = $('#jqxTextArea').val();