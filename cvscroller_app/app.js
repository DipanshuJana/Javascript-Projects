const nextBtn = document.getElementById('next-btn');
const data = [

    {
        name: 'Soham Ghosh',
        age: 23,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/99.jpg',
    },
    {
        name: 'Biswadeep Ghosh',
        age: 21,
        city: 'Delhi',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/98.jpg',
    },
    {
        name: 'Argha Dey',
        age: 20,
        city: 'Mumbai',
        language: 'Javscript',
        framework: 'NodeJS',
        image: 'https://randomuser.me/api/portraits/men/97.jpg',
    },
    {
        name: 'Chikni Chameli',
        age: 19,
        city: 'Hyderabad',
        language: 'Javascript',
        framework: 'AngularJS',
        image: 'https://randomuser.me/api/portraits/women/96.jpg',
    },
    {
        name: 'Dipanshu Jana',
        age: 20,
        city: 'Bangalore',
        language: 'Javascript',
        framework: 'ReactJS',
        image: 'https://randomuser.me/api/portraits/men/95.jpg',
    }
]
nextBtn.addEventListener('click', nextCV);

function cvIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {value: undefined, done: true};
        }
    }
}

candidates = cvIterator(data);
nextCV();
function nextCV(){
    const currentCandidate = candidates.next().value;
    const image = document.getElementById('image');
    const profile = document.getElementById('profile');
    if (currentCandidate != undefined){
        image.innerHTML = `<img class="rounded-circle" src="${currentCandidate.image}">`;
        profile.innerHTML = `
            <h4>Name: ${currentCandidate.name}</h4>
            <h4>Age: ${currentCandidate.age}</h4>
            <h4>Lives In: ${currentCandidate.city}</h4>
            <h4>Language: ${currentCandidate.language}</h4>
            <h4>Framework: ${currentCandidate.framework}</h4>
            <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aut illo blanditiis natus sequi, ipsam necessitatibus sunt obcaecati mollitia ipsum est doloribus nam iure maxime architecto similique quod. Cupiditate quam officiis reprehenderit repellendus expedita dolorem sequi, perspiciatis at, optio vel fuga dolores voluptate, error enim?</strong></p>
        `;
    }
    else{
        alert('End of applications!');
        window.location.reload();
    }
}