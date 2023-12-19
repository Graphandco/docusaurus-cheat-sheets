import clsx from "clsx";
import Heading from "@theme/Heading";

const FeatureList = [
    {
        title: "Facile à utiliser",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        description: (
            <>
                Conçu pour accéder rapidement aux extraits de code dont vous
                avez besoin.
            </>
        ),
    },
    {
        title: "Focus sur les choses importantes",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: (
            <>
                Allez à l'essentiel, trouvez en un clin d'oeil le code dont vous
                avez besoin.
            </>
        ),
    },
    {
        title: "Rapide comme l'éclair",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
            <>
                Une navigation instantanée pour accéder rapidement au contenu
                souhaité.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className="featureSvg" role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className="features">
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
