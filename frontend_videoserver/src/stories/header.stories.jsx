import Header from "../components/header";
import Footer from "../components/footer";
import '../output.css';
export default {
    title: 'Edges',
    component: [Header,Footer],

}
export const head = () => <Header />
export const footer = () => <Footer className=" fixed bottom-0" />