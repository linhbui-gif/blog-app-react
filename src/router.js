import React, {lazy, Suspense} from 'react';

const retryLoadComponent = (fn, retriesLeft = 5, interval = 1000) =>
    new Promise((resolve, reject) => {
        fn()
            .then(resolve)
            .catch((error) => {
                setTimeout(() => {
                    if (retriesLeft === 1) {
                        reject(error);
                        return;
                    }

                    retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
                }, interval);
            });
    });
const Home = lazy(() => retryLoadComponent(() => import('pages/home/index')));
export const LayoutPaths = {
    Guest: '/',
};
export const Paths = {
    Home: '/',
    Rest: '*'
};
export const Pages = {
    Home,
};
export const PublicRoute = ({component: Component, ...rest}) => (
    <Suspense fallback={<div className="DOM-Loading"/>}>
        <Component {...rest} />
    </Suspense>
);
