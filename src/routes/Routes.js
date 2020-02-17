import Home from '../components/Home';
import QuestionList from '../components/exam/QuestionList';
import Score from '../components/exam/Score';

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
    },
    {
        path:'/score',
        component: Score,
        exact: true
    }
]