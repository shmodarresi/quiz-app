import Home from '../components/Home';
import QuestionList from '../components/exam/QuestionList';

export const Routes = [
    {
        path:'/',
        component: Home,
        exact: true
    },
    {
        path:'/exam',
        component: QuestionList,
        exact: true
    }
]