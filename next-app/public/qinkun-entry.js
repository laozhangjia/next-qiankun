console.log(window.__POWERED_BY_QIANKUN__);
((global) => {
    global['next-app'] = {
        bootstrap: () => {
            console.log('purehtml bootstrap');
            return Promise.resolve();
        },
        mount: () => {
            console.log('purehtml mount');
        },
        unmount: () => {
            console.log('purehtml unmount');
            return Promise.resolve();
        },
    };
})(window);
