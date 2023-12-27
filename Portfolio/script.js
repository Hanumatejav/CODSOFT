const toggle = document.getElementsByClassName('toggle')[0];
const link = document.getElementsByClassName('links')[0];

toggle.addEventListener("click", () =>
{
    link.classList.toggle('active');
});



const box1 = document.querySelectorAll('.animate');
const box2 = document.querySelectorAll('.animate1');
const box3 = document.querySelectorAll('.animate2');
const box4 = document.querySelectorAll('.animate3');
const boxes = document.querySelectorAll('.box');
const box6 = document.querySelectorAll('.box1');
const box7 = document.querySelectorAll('.animate7');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes()
{
    const triggerBottom = window.innerHeight / 10  * 11;
    // const triggerBottom = window.innerHeight / 10 * 9;
    box1.forEach(box =>
        {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom)
            {
                box.classList.add('show');
            }
            else
            {
                box.classList.remove('show');
            }
        });
    box2.forEach(box =>
        {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom)
            {
                box.classList.add('show');
            }
            else
            {
                box.classList.remove('show');
            }
        });
    box3.forEach(box =>
        {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom)
            {
                box.classList.add('show');
            }
            else
            {
                box.classList.remove('show');
            }
        });
    box4.forEach(box =>
        {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom)
            {
                box.classList.add('show');
            }
            else
            {
                box.classList.remove('show');
            }
        });
    box7.forEach(box =>
        {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom)
            {
                box.classList.add('show');
            }
            else
            {
                box.classList.remove('show');
            }
        });
    boxes.forEach(box =>
        {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom)
            {
                box.classList.add('show');
            }
            else
            {
                box.classList.remove('show');
            }
        });
    box6.forEach(box1 =>
        {
            const boxTop = box1.getBoundingClientRect().top;
            if(boxTop < triggerBottom)
            {
                box1.classList.add('show');
            }
            else
            {
                box1.classList.remove('show');
            }
        });
}