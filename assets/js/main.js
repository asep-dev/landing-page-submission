const body = document.body

function dateTime() { 
    const dateTime = document.getElementById('date')
    const day = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu']
    const mon = ['Januari', 'Februari', 'Maret', 'April', 'Mei', "Juni", 'July', 'Agustus', 'September',
        'Oktober', 'November', 'Desember'
    ]
    const now = new Date();
    const formatted = day[now.getDay()] + ', ' + now.getDate() + ' ' + mon[now.getMonth()] + ' ' + now.getFullYear();

    dateTime.innerText = formatted
}

function sideBarOpen(){
    const side = document.getElementById('sidebar')
    const sideClose = document.querySelector('.side-close')

    side.addEventListener('click',function(){
        body.classList.toggle('open-side');
    })
    sideClose.addEventListener('click',function(){
        body.classList.remove('open-side');
    })
}

function menuMobile(){
    const menu = document.getElementById('mobile')
    const menuClose = document.querySelector('.menu-close')

    menu.addEventListener('click',function(){
        body.classList.toggle('open-menu')
    })
    menuClose.addEventListener('click',function(){
        body.classList.remove('open-menu');
    })
}


function dropDownMobile(){
    const dropDown = document.querySelectorAll('.dropdown-m')
    dropDown.forEach(function(item){
        item.addEventListener('click',function(){
            const target = item.lastElementChild
            if (target.classList.contains('dropdown-menu')) {
                target.style.display = target.style.display === 'block' ? '' : 'block'
            }
        })
    })
}

// Call function
dateTime()
menuMobile()
sideBarOpen()
dropDownMobile()