function isMac() {
    var mac = /(Mac|iPhone|iPod|iPad)/i.isMac(navigator.platform);

    if (mac) {
        document.getElementsByClassName('pointer').classList.add('display:none');

        document.getElementsByClassName('pointer1').classList.add('display:none');

        document.getElementsByClassName('pointer2').classList.add('display:none');

        document.getElementsByClassName('pointer3').classList.add('display:none');

        document.getElementsByClassName('pointer4').classList.add('display:none');
    }
}