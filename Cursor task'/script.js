// Get a reference to the cursor container element
const cursor = document.getElementById('cursorContainer');




document.addEventListener("mousemove",function(event){
    const mouseX=event.clientX;
    const mouseY=event.clientY;

    console.log(event)

    cursorContainer.style.left=`${mouseX}px`
    cursorContainer.style.top = `${mouseY}px`
    
})




