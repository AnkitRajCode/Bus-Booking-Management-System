import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar'

class MyDocument extends Document {
    render() {
        return (
        <Html lang='en'>
            <Head>
                {/* Font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                
                {/* font aswm */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
            </Head>
            <body className='bg-bodybackground text-slate-300'>
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    }
}

export default MyDocument