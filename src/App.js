import AppLayout from "layouts/AppLayout";
import DynamicForm from "pages/Home/AddInput";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const FormTask = lazy(() => import("pages/Home/FormTask"));
const TaskList = lazy(() => import("pages/Home/TaskList"));
function App() {
    return (
        <Suspense fallback={<div>Loading.....</div>}>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <AppLayout>
                            <Switch>
                                <Route path="/" exact>
                                    <TaskList />
                                </Route>
                            </Switch>
                        </AppLayout>
                        <Route path="/form-task/:id">
                            <FormTask />
                        </Route>
                        <Route path="/dynamic">
                            <DynamicForm />
                        </Route>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
