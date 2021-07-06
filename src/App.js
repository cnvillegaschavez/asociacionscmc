import React, { Fragment, Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import generateStore, { history } from "./redux/store";
import PropsRoute from "./shared/components/PropsRoute";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import Pace from "./shared/components/Pace";
import CacheBuster from './CacheBuster';
import SignInSide from './logged_out/components/login/SignInSide';
import ResetPassword from './logged_out/components/login/ResetPassword';
import RegisterInSide from './logged_out/components/register/RegisterInSide';
import VerifyCodeInSide from './logged_out/components/register/VerifyCodeInSide';

const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

function App() {
    const store = generateStore();
    return (
        <CacheBuster>
            {({ loading, isLatestVersion, refreshCacheAndReload }) => {
                if (loading) return null;
                if (!loading && !isLatestVersion) {
                    refreshCacheAndReload();
                }
                return (<Provider store={store} >
                    <BrowserRouter>
                        <MuiThemeProvider theme={theme}>
                            <CssBaseline />
                            <GlobalStyles />
                            <Pace color={theme.palette.primary.light} />
                            <Suspense fallback={<Fragment />}>
                                <Switch>
                                    <PropsRoute
                                        exact
                                        path="/verifycode"
                                        component={VerifyCodeInSide}
                                    />
                                    <PropsRoute
                                        exact
                                        path="/register"
                                        component={RegisterInSide}
                                    />
                                    <PropsRoute
                                        exact
                                        path="/login"
                                        component={SignInSide}
                                    />
                                    <PropsRoute
                                        exact
                                        path="/resetpassword"
                                        component={ResetPassword}
                                    />
                                    <Route path="/c">
                                        <LoggedInComponent />
                                    </Route>
                                    <Route>
                                        <LoggedOutComponent history={history} />
                                    </Route>
                                </Switch>
                            </Suspense>
                        </MuiThemeProvider>
                    </BrowserRouter>
                </Provider>);
            }}
        </CacheBuster>
    );
}

serviceWorker.register();

export default App;
