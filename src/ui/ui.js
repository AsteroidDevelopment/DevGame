export const changeToolbar = (e) => {
    let headers2 = document.querySelectorAll('#toolbar-headers h3')
    headers2.forEach((elem) => elem.classList.remove('toolbar-active'))

    let screens = document.querySelectorAll('#toolbar-options > div')
    screens.forEach((elem) => elem.classList.remove('toolbar-active'))

    e.target.classList.add('toolbar-active')

    headers2 = document.querySelectorAll('#toolbar-headers h3')
    headers2.forEach((elem, i) => {
        if (elem.classList.contains('toolbar-active')) {
            screens[i].classList.add('toolbar-active')
        }
    })
}