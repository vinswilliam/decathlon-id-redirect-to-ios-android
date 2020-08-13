function detectMobile() {
    const toMatchAndroid = [
        /Android/i,
    ];

    const toMatchIPhone = [
        /iPhone/i,
        /iPad/i,
    ];
    
    if (toMatchAndroid.some(toMatchItem => navigator.userAgent.match(toMatchItem))) {
        window.location.href = "market://details?id=id.co.decathlon";
    } else if (toMatchIPhone.some(toMatchItem => navigator.userAgent.match(toMatchItem))) {
        window.location.href = 'https://apps.apple.com/id/app/decathlon-indonesia/id1513111242?l=id';
    } else {
        document.getElementById('redirect-info').innerHTML = "Ups, terjadi kesalahan teknis.."
    }
}

detectMobile();