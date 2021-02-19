$(document).ready(function(){
    $('.accordion').click(function (e) { 
        $('.panel').toggle("slow","linear");
        $(this).toggleClass('bg-dark');
    });
    $('#linkedin').click(function (e) { 
        $(this).val('https://www.linkedin.com/');
    });
    $('#phone').click(function (e) { 
        $(this).val('+91');
    });
    $('.name, .email, .phone, .aadhar, .address .backlogs').keyup(function () { 
        if(this.checkValidity()){
            $(this).removeClass('invalid');
            $(this).addClass('valid');
        }else{
            $(this).removeClass('valid');
            $(this).addClass('invalid');
        }
    });
    var validDate = new Date();
    validDate.setFullYear(validDate.getFullYear()-18);

    $('#dob').keyup(function () { 
        var dob = new Date(this.value);
        if(dob < validDate){
            $(this).removeClass('invalid');
            $(this).addClass('valid');
        }else{
            $(this).removeClass('valid');
            $(this).addClass('invalid');
        }
    });
    $('#submit').click(function (e) { 
       
        var data = $('#reg-form').serializeArray();
        if (new Date(data[5].value) > validDate){
            e.preventDefault();
            alert('You must be 18 years old to fill this form');
        }
    });
});