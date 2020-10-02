// let source = "bbc-news";
// let apiKey = "fc067a65425045eeaf52b2826bc91e19";

let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.covid19api.com/live/country/south-africa/status/confirmed', true);

xhr.onload = function(){
   if(this.status === 200){
       let json = JSON.parse(this.responseText);
      console.log(json); 
   } 
   else{
       console.log("Some error occured");
   }
}
xhr.send();

let news = `<div class="card">
    <div class="card-header" id="headingOne">
        <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
        </button>
        </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
        data-parent="#accordionExample">
        <div class="card-body">
            json
    </div>
    </div>
</div>`
 newsAccordion.innerHTML = news;