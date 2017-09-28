var THREEx = THREEx || {};
THREEx.WindowResize = function(renderer, camera) {
    var callback = function() {
        // notify the renderer of the size change
        var ua = navigator.userAgent;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
            renderer.setSize(window.innerWidth, window.screen.availHeight);
            camera.aspect = window.innerWidth / window.screen.availHeight;
        } else {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
        }
        camera.updateProjectionMatrix();
    }
    // bind the resize event
    window.addEventListener('resize', callback, false);
    // return .stop() the function to stop watching window resize
    return {
        stop: function() {
            window.removeEventListener('resize', callback);
        }
    };
}
