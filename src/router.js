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
const Home = lazy(() => retryLoadComponent(() => import('./Pages/Home/index')));
const Blog = lazy(() => retryLoadComponent(() => import('./Pages/Blog/index')));
const NewDetail = lazy(() => retryLoadComponent(() => import('./Pages/BlogDetails/index')));
export const LayoutPaths = {
    Guest: '/',
    Blog: '/tin-tuc',
};
export const Paths = {
    Home: '/',
    BlogList: '/tin-tuc',
    NewDetail: `${LayoutPaths.Blog}/:id`,
    Rest: '*'
};
export const Pages = {
    Home,
    Blog,
    NewDetail
};
export const PublicRoute = ({component: Component, ...rest}) => (
    <Suspense fallback={<div className="DOM-Loading"/>}>
        <Component {...rest} />
    </Suspense>
);
