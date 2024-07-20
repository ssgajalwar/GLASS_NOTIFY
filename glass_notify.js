

$(document).ready(function(){


})
function glass_notify(message,icon){
    let ele =   `<div class="box-wrapper">
                    <div class="box">
                        <div class="popup"> <span>${icon}</span> <span class="poopup-text">${message}</span> </div>
                    </div>
                </div>`
    $("body").append(ele)            
}