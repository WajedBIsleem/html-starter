function writeHijri(t) {
    return t.toLocaleString("ar-SA-u-nu-latn", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })
}

$(document).ready(function () {
    let schoolId = $("#hSchoolId").val();
    let csrfid = $("#csrfid").attr("value");

    $('#wrapper').html('');
    $('.modal,.modal-backdrop').remove();
    $('body').removeClass('modal-open');

    var curr = new Date; 
    var first = curr.getDate() - curr.getDay();

    var firstday = new Date(curr.setDate(first));
    var lastday = new Date(curr.setDate(first + 4));


    $('#wrapper').html(writeHijri(firstday) + " واجد " + writeHijri(lastday));

    $.ajax({
        type: "POST",
        url: 'https://schools.madrasati.sa/Teacher/TimeTable/GetCal',
        headers: {
            requestverificationtoken: csrfid
        },
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({ Date: "12/27/2023 7:34:29 PM", index: 0, SchoolId: schoolId }),
        success: function (data) {
            console.log(data);
            //$("#wrapper").append(JSON.stringify(data));
        }
    });
});