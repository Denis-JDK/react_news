
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {Layout} from "./components/Layout/Layout";
import {NewsListPage} from "./pages/NewsList/NewsListPage";


export function App(){
    return (
        <Layout>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NewsListPage/>} />
                <Route path='comments/:id' element={<CommentsPage/>} />
            </Routes>
        </BrowserRouter>
        </Layout>
    )

}
export default App;
