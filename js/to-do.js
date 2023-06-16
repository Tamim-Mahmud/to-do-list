let count=0
document.getElementById('task-btn').addEventListener('click',function(){
    const givenInput = document.getElementById('add-task-field').value;
    count+=1;
    const newElement =  document.createElement('div');

    newElement.innerHTML=`
    <section class=" flex justify-between text-xl font-semibold mt-7">
        <h2>${count}</h2>
        <p id='main-task' class="">${givenInput}</p>
        <div class="">
            <button class="allButtonDelete bg-red-600 px-4 py-2 text-sm text-white rounded-lg ">Delete</button>
            <button class="allButtonDone bg-red-600 px-4 py-2 text-sm text-white rounded-lg ">Done</button>

        </div>
    </section>
    `
    document.getElementById('allTask').appendChild(newElement);

    const deleteButton = document.getElementsByClassName('allButtonDelete');

    for(const buttons of deleteButton){
        buttons.addEventListener('click', function(e){
            e.target.parentNode.parentNode.parentNode.remove(e.target);
        })
    }
    const doneButton = document.getElementsByClassName('allButtonDone');

    for(const buttons of doneButton){
        buttons.addEventListener('click', function(e){
            const mainTask=e.target.parentNode.parentNode;
            const s= mainTask.childNodes[3].innerText;

            mainTask.childNodes[3].innerText ="";
            mainTask.childNodes[3].innerHTML=`
            <s>${s}</s>
            `
        });
    }

});



