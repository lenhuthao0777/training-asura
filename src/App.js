import AppLayout from "layouts/AppLayout";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const FormTask = lazy(() => import("pages/Home/FormTask"));
function App() {
    return (
        <Suspense fallback={<div>Loading.....</div>}>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <AppLayout>
                            <Switch>
                                <Route path="/form-task/:id">
                                    <FormTask />
                                </Route>
                            </Switch>
                        </AppLayout>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
