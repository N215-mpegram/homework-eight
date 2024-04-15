function initListeners() {
    $("nav a").on("click", (e) => {
        let btnID = e.currentTarget.id;
        $("#app").html(btnID);
    })
}

$(document).ready(function () {
    initListeners();
})
