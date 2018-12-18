import nProgress from 'nprogress';

let ProgresBar = {
    start: function (increment) {
        nProgress.start();
        nProgress.inc(increment);
    },
    stop: function () {
        nProgress.done();
    }
}


export {ProgresBar}