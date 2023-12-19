import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <section className="home">
            <div className="hero">
                <div className="container">
                    <h1>Cheat Sheets</h1>
                    <div className="hero-subtitle">
                        Votre code sous la main, comme une baguette magique !
                    </div>
                    <Link
                        className="button button--primary"
                        to="/docs/markdown"
                    >
                        Découvrir nos tips →
                    </Link>
                </div>
            </div>
        </section>
        // <header className={clsx('hero hero--primary', styles.heroBanner)}>
        //   <div className="container">
        //     <Heading as="h1" className="hero__title">
        //       {siteConfig.title}
        //     </Heading>
        //     <p className="hero__subtitle">{siteConfig.tagline}</p>
        //     <div className={styles.buttons}>
        //       <Link
        //         className="button button--secondary button--lg"
        //         to="/docs/intro">
        //         Docusaurus Tutorial - 5min ⏱️
        //       </Link>
        //     </div>
        //   </div>
        // </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
