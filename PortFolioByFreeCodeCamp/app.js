const sections=document.querySelectorAll('.section');
const sectBtns=document.querySelectorAll('.controlls');
const sectBtn=document.querySelectorAll('.control');
const allSections=document.querySelector('.main-content');


function pageTransitions(){
    //button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            // Find the element with the active-btn class
            let currentBtn = document.querySelectorAll('.active-btn');
            
            // If there's an element with the 'active-btn' class, remove it
            if (currentBtn.length > 0) {
                currentBtn[0].classList.remove('active-btn');
            }
            
            // Add the 'active-btn' class to the clicked button
            this.classList.add('active-btn');
        });

    }

    //sections active 
    allSections.addEventListener('click',(e)=>{
        const id=e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn)=>{
                btn.classList.remove("active");

            })
            e.target.classList.add('active');
            //hide other sections;
            sections.forEach((sections)=>{
                sections.classList.remove('active');
            })
            const element=document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle transition
    const themeBtn=document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
       let ele=document.body;
       ele.classList.toggle('color-change');
    })
}
pageTransitions();


