let currentProject = null;
const cardWidth = 350;
const cardHeigth = 240;

const icons = document.querySelectorAll('.icons span');

icons.forEach(icon => {
    icon.addEventListener('click', e => {

        // get position of the icon clicked and project associated with it
        let {left, top} = e.target.getBoundingClientRect();
        let project = document.getElementById(e.target.dataset.project);

        // calculating position of the project card
        let position = e.target.dataset.pos.split(' ');
        if(window.innerWidth < 1600 && window.innerHeight > 1000) position[0] = changePos(position[0]);
        else if(window.innerWidth < 1430 && window.innerHeight <= 1000) position[0] = changePos(position[0]);

        if(window.innerWidth < 720 || window.innerHeight < 720){
             project.style.left = '50%';
             project.style.top = '50%';
            }
        else setPos(position, project, left, top);
        

        project.classList.add('show');

        // hide current opened project if any
        if(currentProject) currentProject.classList.remove('show')
        currentProject = project;
        e.stopPropagation();
    })
});

window.addEventListener('click', () => {
    if(currentProject) currentProject.classList.remove('show');
    currentProject = null;
});

function changePos(position){
    if(position === 'middle') return 'middle';
    if(position === 'left') return 'right';
    return 'left';
}

function setPos(position, project, left, top) {
    
    if(position[0] === 'left') project.style.left = left - cardWidth - 20 + 'px';
    else if (position[0] === 'middle') project.style.left = left - cardWidth/2 + 35 + 'px';
    else  project.style.left = left + 100 + 'px';

    if(position[0] === 'middle'){
        if(position[1].includes('bottom')) project.style.top = top + 100  + 'px';
        else project.style.top = top - cardHeigth - 20  + 'px';
    }else{
        if(position[1].includes('top')) project.style.top = top - cardHeigth/2 - 40  + 'px';
        else if(position[1].includes('middle')) project.style.top = top - cardHeigth/2 + 40 + 'px';
        else project.style.top = top + 'px';
    }
}