import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Error404 from './components/Error/Error404';
import AppRouting from './AppRouting';
import React from 'react';
import { useTracking } from "react-tracking";

function App(): React.ReactElement {
  const { Track } = useTracking()
  return (
    <Track>
      <Router>
        <Routes>
          <Route path="404" element={<Error404 />} />
          <Route path={"*"} element={<AppRouting />}></Route>
        </Routes>
      </Router>
    </Track>
  );
}

export default App;
