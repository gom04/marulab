import '../styles/globals.css'
import { ThemeProvider } from 'next-themes' 
import Footer from '../components/Footer'; 
import Main from '../components/Main';  
function MyApp({ Component, pageProps }) {
 return(

  <ThemeProvider enableSystem={true} attribute="class"> 
           <Component {...pageProps}/> 
            <Footer/>
 </ThemeProvider> 


 );

}

export default MyApp
 