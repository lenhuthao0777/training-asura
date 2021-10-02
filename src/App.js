import AppLayout from "layouts/AppLayout";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Home = lazy(() => import("pages/Home"));
function App() {
    return (
        <Suspense fallback={<div>Loading.....</div>}>
          <BrowserRouter>
            <Switch>
                <Route path="/">
                    <AppLayout>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
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
