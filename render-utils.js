// planning to refactor



export function randomPicDiv(divClass) {
    const div = document.createElement('div');
    div.classList.add(`${divClass}-item`);

    let arrPic = ['randomPicture1', 'randomPicture2', 'randomPicture3', 'randomPicture4', 'randomPicture5', 'randomPicture6', 'randomPicture7', 'randomPicture8', 'randomPicture9', 'randomPicture10'];

    let num = Math.floor(Math.random() * 7);

    div.classList.add(`${arrPic[num]}`);
    // console.log("🚀 ~ file: render-utils.js ~ line 10 ~ randomPicDiv ~ num", num)

    // if (num === 1) {
    //     div.style.backgroundImage = "url('https://picsum.photos/400')";
    // }
    // if (num === 2) {
    //     div.style.backgroundImage = "url('https://picsum.photos/401')";
    // }
    // if (num === 3) {
    //     div.style.backgroundImage = "url('https://picsum.photos/402')";
    // }
    // if (num === 4) {
    //     div.style.backgroundImage = "url('https://picsum.photos/403')";
    // }
    // if (num === 5) {
    //     div.style.backgroundImage = "url('https://picsum.photos/404')";
    // }
    // if (num === 6) {
    //     div.style.backgroundImage = "url('https://picsum.photos/405')";
    // }
    // if (num === 7) {
    //     div.style.backgroundImage = "url('https://picsum.photos/406')";
    // }


    return div;
}
