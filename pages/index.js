import Layout from '../components/Layout'
import Link from 'next/link'
import { skills, experiences, projects } from '../profile'

const Index = () => (
    <Layout>
        {/** Header card - Presentation */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/andy.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Andy Castillo</h1>
                            <h3>Software Developer</h3>
                            <p>
                                Soy un apasionado de la tecnología con experiencia en el desarrollo de software, poseo habilidad para promover propuestas de valor innovadoras a los proyectos aprovechando las mejores características de metodologías ágiles con la finalidad de obtener resultados satisfactorios, además tengo excelentes habilidades matemáticas las cuales utilizo en la resolución de tareas complejas.
                            </p>
                            <Link href="/hireme">
                                <a className="btn btn-outline-light">Hire me</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Section skills & experience */}
        <div className="row py-4">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map(({ skill, percentaje }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: `${percentaje}%` }}></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map(({ title, rol, description, from, to }, i) => (
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <h5>{from} - {to}</h5>
                                        <p><strong>{rol}.</strong> {description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href="/experiences">
                            <a className="btn btn-outline-dark">Know More</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/** Portfolio */}
        <div className="row py-4">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map(({ name, description, image, url }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image}`} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href={url} target="_blank" className="btn btn-light">View project</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link href="/portfolio">
                            <a className="btn btn-outline-light">More Projects</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index