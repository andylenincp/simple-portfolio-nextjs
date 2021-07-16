import Layout from '../components/Layout'
import Link from 'next/link'

const custom404 = () => (
    <Layout footer={false}>
        <div className="position-absolute top-50 start-50 translate-middle text-center">
            <h1>404</h1>
            <p>This page does not exists. Please return to <Link href="/">
                <a>home</a>
            </Link>
            </p>
        </div>
    </Layout>
)

export default custom404