import { Head } from "$fresh/runtime.ts";

export default function Coat(props: any) {
    return (
      <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="/style/style.css" />
            <link rel="stylesheet" href="/style/detail.css" />
            <title>{props.title}</title>
        </Head>
        <header>
            <h1>{props.title}</h1>
            <img src="/images/sgruwo_logo.png" alt="" />
        </header>
        {{props}}
        <footer>
            <p>© 2023 <a href="https://www.roeh.ch/">Rouven Hänggi</a>, <a href="https://gianfederspiel.ch">Gian Federspiel</a></p>    
        </footer>
      </>
    );
}