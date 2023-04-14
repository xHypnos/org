import "./Footer.css";

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className="container__footer">
            <div className='redes'>
                <a href='/#'>
                    <img src="/img/facebook.png" alt='Facebook' />
                </a>
                <a href='/#'>
                    <img src="/img/twitter.png" alt='twitter' />
                </a>
                <a href='https://www.instagram.com/hypnos_a/'>
                    <img src="/img/instagram.png" alt='instagram' />
                </a>
            </div>
            <img src='/img/Logo.png' alt='org' />
            <strong>Desarrollado por <a href="https://andresmontes.dev/">Andrés Montes</a></strong>
        </div>
    </footer>
}

export default Footer;