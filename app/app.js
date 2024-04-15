var homeContent = `      <div class="home">
<h1>HOME PAGE</h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
  provident, doloribus unde reprehenderit, ea porro, autem magnam
  accusamus laudantium odit ratione minima similique quod? Voluptas
  vitae quidem assumenda fugiat sed?
</p>
<p>
  Odit qui id, deserunt illo voluptatum magnam. Accusantium earum, alias
  ullam mollitia vitae officiis. Impedit perspiciatis voluptatibus
  recusandae, expedita beatae adipisci esse alias consequatur, officiis
  quibusdam quae totam aperiam. Necessitatibus.
</p>
<img src="../images/tour-01.jpg" alt="Picture" />
</div>`

var aboutContent = `      <div class="about">
<h1>ABOUT PAGE</h1>
<div class="place">
  <img src="images/tour-08.jpg" alt="picture" />
  <div class="placeText">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
      beatae, maiores aliquid voluptatum eius ut, quia assumenda autem,
      cupiditate nemo perferendis! Eius, cum consectetur nisi ab quis
      nihil porro distinctio?
    </p>
    <p>
      Quis est maiores quasi! Nobis eligendi at hic? Tempore, quod animi
      fugit, excepturi dolorem, possimus autem nobis illo debitis
      incidunt ea nam sit repudiandae. Eum eius consequuntur eveniet
      quis doloremque?
    </p>
  </div>
</div>
<div class="place">
  <img src="images/tour-07.jpg" alt="picture" />
  <div class="placeText">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
      beatae, maiores aliquid voluptatum eius ut, quia assumenda autem,
      cupiditate nemo perferendis! Eius, cum consectetur nisi ab quis
      nihil porro distinctio?
    </p>
    <p>
      Quis est maiores quasi! Nobis eligendi at hic? Tempore, quod animi
      fugit, excepturi dolorem, possimus autem nobis illo debitis
      incidunt ea nam sit repudiandae. Eum eius consequuntur eveniet
      quis doloremque?
    </p>
  </div>
</div>
</div>`

function initListeners() {
    $("nav a").on("click", (e) => {
        let btnID = e.currentTarget.id;

        $("#app").html(btnID);
    })
}

$(document).ready(function () {
    // $("#app").html(homeContent);
    initListeners();
})
