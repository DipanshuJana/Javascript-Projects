(function showNews(){
    // Initialize the variables
    const newsAccordian = document.getElementById('accordionExample');
    let accordianHTML = '';
    const apiKey = '6981df98fe1e4c85b0f835646fc1a857';
    const source = 'the-times-of-india';

    // Initialize xhr http request
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
    
    // fetching the news from news api
    xhr.onload = function(){
        if (this.status = 200){
            const news = JSON.parse(this.responseText);
            console.log(news.articles[0]);
            let index = 0;
            news.articles.forEach(function(article){
                index ++;
                accordianHTML += `
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    <b>Breaking News ${index}</b>: ${article.title} | ${article.author} | Date: ${article.publishedAt.split('T')[0]}
                    </button>
                  </h2>
                  <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        ${article.description}
                        ${article.content}
                    </div>
                  </div>
                </div>
                `;
            });

            newsAccordian.innerHTML = accordianHTML;
        }
        else{
            newsAccordian.innerHTML = '<h2>Failed to fetch data. Please try again later...</h2>';
        }
    };
    
    // sending the request
    xhr.send();
}());