import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Error404 from "./components/Error/Error404";
import AppLayout from "./modules/Layouts/AppLayout/AppLayout";

const HomePage = React.lazy(() => import('@app/pages/HomePage'));
const PlaygroundPage = React.lazy(() => import('@app/pages/PlaygorundPage'));

export default function AppRouting() {

    return(
        <Routes>
            <Route element={<AppLayout />}>
                <Route path='' element={
                    <Suspense>
                        <HomePage />
                    </Suspense>
                }/>
                <Route path='playground' element={
                    <Suspense>
                        <PlaygroundPage />
                    </Suspense>
                }/>
            </Route>
            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}