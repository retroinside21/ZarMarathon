import s from './Layout.module.css';

const Layout = ({title, desc, id, urlBg = false}) =>{

    const backgroundStyle = urlBg ? {backgroundImage:'../../assets/bg2.jpg'} : {};

    return(
        <section className={s.root} id={id} style={backgroundStyle}>
    <div className={s.wrapper}>
        <article>
            <div className={s.title}>
                <h3>{title}</h3>
                <span className={s.separator}></span>
            </div>
            <div className={s.desc}>
                <p>{desc} </p>
            </div>
        </article>
    </div>
</section>
    )
}

export default Layout;