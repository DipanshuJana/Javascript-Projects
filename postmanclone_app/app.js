// accesing all the html elements
const paramsBox = document.querySelector('.params-box');
const jsonBox = document.querySelector('.json-box');
const paramsCheck = document.getElementById('params');
const jsonCheck = document.getElementById('json');
const addParamsBtn = document.getElementById('add-params');
const addedParams = document.getElementById('added-params');
const submitBtn = document.getElementById('submit');
let addedParamsCount = 0;

function getElementFromString(string){
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

// hiding the parametres box initially
paramsBox.style.display = "none";

// if the user clicks on the params box hide the json box
paramsCheck.addEventListener('click', ()=>{
    jsonBox.style.display = 'none';
    paramsBox.style.display = '';
    addedParams.style.display = '';
})

// if the user clicks on the json box hide the params box
jsonCheck.addEventListener('click', ()=>{
    paramsBox.style.display = 'none';
    addedParams.style.display = 'none';
    jsonBox.style.display = '';
})

// if the user clicks on + button, add more parameters
addParamsBtn.addEventListener('click', (e)=>{
    let str = `
    <div class="row g-3 my-1 param-form" id="param-form">
        <label for="inputPassword" class="col-sm-2 col-form-label">Parameter ${addedParamsCount+2}</label>
        <div class="col-md-4">
        <input type="text" class="form-control" id="param-key${addedParamsCount+2}" placeholder="Enter Parameter Key">
        </div>
        <div class="col-md-4">
        <input type="text" class="form-control" id="param-value${addedParamsCount+2}" placeholder="Enter Parameter Value">
        </div>
        <div class="col-md-2">
        <button class="btn btn-primary delete-param">-</button>
        </div>
        </form>
        `;
        let paramElement = getElementFromString(str);
        addedParams.appendChild(paramElement);
        deleteParam();
        addedParamsCount++;
    })
    
function deleteParam(){
    const deleteParam = document.getElementsByClassName('delete-param');
    for (item of deleteParam){
        item.addEventListener('click', (e)=>{
            e.target.parentElement.parentElement.remove();
        })
    }
}

// if the used clicks the submit button then use it
submitBtn.addEventListener('click', ()=>{
    document.getElementById('json-response').innerText = 'Please Wait Fetching Response...';
    FetchURL();
})

function FetchURL(){
    const url = document.getElementById('urlField').value;
    const requestType = document.querySelector("input[name='requestType']:checked").value;
    const contentType = document.querySelector("input[name='contentType']:checked").value;
    data = {};

    // if user has selected used params option instead of json, collect all the parameters else collect all the json content
    if(contentType == 'PARAMS'){
        const params = document.querySelectorAll('.param-form')
        params.forEach(function(param){
            const paramKey = param.children[1].firstElementChild.value;
            const paramValue = param.children[2].firstElementChild.value;

            if(paramKey != "" && paramValue != ""){
                data[paramKey] = paramValue;
            }
        })
        data = JSON.stringify(data);
    }
    
    else{
        const json = document.getElementById('json-input');
        if (json.value != ""){
            data = JSON.parse(json.value);
            data = JSON.stringify(data);
        }
    }

    // if the request type is post invoke the fectch api to create a post request
    if(requestType == 'GET'){
        fetch(url, {
            method: 'GET',
        })
        .then(response=> response.text())
        .then((text) => {
            document.getElementById('json-response').innerText = text;
            Prism.highlightAll();
        });
    }
    
    else{
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response=> response.text())
        .then((text) => {
            document.getElementById('json-response').innerText = text;
            Prism.highlightAll();
        });
    }
}