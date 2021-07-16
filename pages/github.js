import Layout from '../components/Layout'
import Error from './_error'

const Github = ({ user, statusCode }) => {

    if (statusCode) {
        return <Error statusCode={statusCode} />
    }

    return (
        <Layout footer={false} dark>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h3>{user.name}</h3>
                        <img src={user.avatar_url} className="img-fluid my-3" />
                        <p>{user.bio}</p>
                        <a href={user.blog} className="btn btn-outline-dark my-2" target="_blank">My Blog</a>
                        <a href={user.html_url} className="btn btn-outline-dark" target="_blank">Go to github</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/andylenincp')
    const data = await res.json()
    const statusCode = res.status > 200 ? res.status : false
    return {
        props: {
            user: data,
            statusCode
        }
    }
}

export default Github