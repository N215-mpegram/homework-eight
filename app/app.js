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

var aboutContent = ``

var productsContent = `      <div class="products">
<h1>PRODUCTS PAGE</h1>
<div class="project">
  <h2>Product 1</h2>
  <div class="project-work">
    <img src="images/tour-04.jpg" alt="Picture4" />
    <p class="workText">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
      dolor placeat ea omnis quidem dolorem, officiis nam, ducimus quis
      eos quasi nihil sunt earum reprehenderit perspiciatis tempore.
      Voluptatem numquam voluptatum dolorem maiores in error aspernatur
      ducimus eveniet quo, minima et iusto? Recusandae dicta fugiat
      animi voluptates. Molestias neque deleniti, consequuntur minima
      optio blanditiis. Necessitatibus veniam reiciendis repudiandae
      quibusdam iste, quae voluptatem rerum illo eius, in culpa autem
      doloribus ratione animi magnam laborum ipsum ea fugit. Labore
      incidunt qui unde architecto omnis ducimus aut laborum a adipisci
      recusandae deleniti provident aspernatur, molestias itaque ad,
      facilis debitis ex placeat officiis quod iste repellat. Dolor
      earum magni, amet maiores dolores quis illo repudiandae rem, iure
      nobis deleniti a ea quas labore at, odit sint nostrum recusandae
      veritatis reiciendis ipsum! Quae maiores voluptas nemo!
    </p>
  </div>
</div>
<div class="project">
  <h2>Product 2</h2>
  <div class="project-work">
    <img src="images/tour-09.jpg" alt="Picture4" />
    <p class="workText">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
      rerum necessitatibus illum cum deleniti explicabo veritatis libero
      obcaecati ea minima numquam, officia hic voluptas perspiciatis
      iusto placeat minus magni corrupti sunt ullam nesciunt mollitia
      magnam quod. Velit alias repellendus modi debitis tenetur adipisci
      facilis. Magni, laudantium harum. Asperiores, eum optio ea,
      molestiae autem delectus placeat, ipsam illum sapiente omnis dolor
      consectetur. Vitae facilis, amet eligendi nemo quae officia, quo
      praesentium voluptates, sint repellat dolores? Aperiam qui quas
      quam recusandae quasi, a aliquid quidem sequi eos quos assumenda
      dignissimos similique quaerat doloribus voluptatibus veniam culpa
      vel beatae ut nobis? Quos ut tempore impedit fugiat facilis iusto
      repudiandae aperiam nisi cupiditate blanditiis, expedita odit
      culpa ipsam reprehenderit aliquam, quod itaque asperiores labore
      perspiciatis neque tempora dolor. Quasi aspernatur alias a
      laboriosam eligendi nostrum facilis reiciendis earum reprehenderit
      temporibus nesciunt, excepturi, ipsam aperiam esse qui sed
      quaerat, repellendus expedita. Doloribus asperiores, molestias
      amet nesciunt iure corporis mollitia praesentium sint voluptates,
      unde debitis dignissimos.
    </p>
  </div>
</div>
<div class="project">
  <h2>Product 3</h2>
  <div class="project-work">
    <img src="images/tour-08.jpg" alt="Picture4" />
    <p class="workText">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
      dolor placeat ea omnis quidem dolorem, officiis nam, ducimus quis
      eos quasi nihil sunt earum reprehenderit perspiciatis tempore.
      Voluptatem numquam voluptatum dolorem maiores in error aspernatur
      ducimus eveniet quo, minima et iusto? Recusandae dicta fugiat
      animi voluptates. Molestias neque deleniti, consequuntur minima
      optio blanditiis. Necessitatibus veniam reiciendis repudiandae
      quibusdam iste, quae voluptatem rerum illo eius, in culpa autem
      doloribus ratione animi magnam laborum ipsum ea fugit. Labore
      incidunt qui unde architecto omnis ducimus aut laborum a adipisci
      recusandae deleniti provident aspernatur, molestias itaque ad,
      facilis debitis ex placeat officiis quod iste repellat.
    </p>
  </div>
</div>
</div>`

var contactContent = `      <div class="contact">
<h1>CONTACT PAGE</h1>
<div class="contactform">
  <div class="formInfoMap">
    <div class="formInfo">
      <input type="text" placeholder="First Name" class="formInput" />
      <input type="text" placeholder="Last Name" class="formInput" />
      <input type="text" placeholder="Email" class="formInput" />
      <input type="text" placeholder="Phone Number" class="formInput" />
    </div>
    <img src="images/travel-fly-map.jpg" alt="Map" />
  </div>
  <input type="text" placeholder="Message" class="formMes" />
  <div class="submit">SUBMIT</div>
</div>
</div>`

function initListeners() {
    $("nav a").on("click", (e) => {
        let btnID = e.currentTarget.id;
        let pageContent = btnID + "Content";
        console.log(eval(pageContent));

        $("#app").html(eval(pageContent));
    })
}

$(document).ready(function () {
    // $("#app").html(homeContent);
    initListeners();
})
